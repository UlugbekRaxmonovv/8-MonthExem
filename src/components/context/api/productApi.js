import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({ 
        url: '/cards', 
        params 
      }),
      providesTags:["Product"]
    }),
    getProductById: build.query({
      query: (id) => ({ 
        url: `/cards/${id}`
      }),
    }),
    createProduct: build.mutation({
      query: (body)=> ({
        url:"/products",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/products/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct: build.mutation({
      query: ({id, body})=> ({
        url:`/products/${id}`,
        method: "PUT", // or "PATCH"
        body
      }),
      invalidatesTags: ["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
} = productApi