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

    getCategory: build.query({
      query: (params) => ({ 
        url: '/category', 
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
        url:"/cards",
        method: "POST",
        body
      }),
      invalidatesTags: ["Product"]
    }),
    deleteProduct: build.mutation({
      query: (id)=> ({
        url:`/cards/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    }),
    updateProduct: build.mutation({
      query: ({ body,id})=> ({
        url:`/cards/${id}`,
        method: "PUT", 
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
  useGetCategoryQuery,
} = productApi