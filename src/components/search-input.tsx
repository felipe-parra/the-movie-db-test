"use client"
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Button } from './ui/button'
import { SearchIcon } from 'lucide-react'
import { SearchFormSchema, searchFormSchema } from '@/schemas/input.schema'
import { useMovieStore } from '@/store/useMovieStore'
import { useStore } from 'zustand'


const INITIAL_STATE: SearchFormSchema = {
  searchQuery: ''
}

export default function SearchInput() {
  const query = useStore(useMovieStore, (state) => state.query)
  const updateQuery = useMovieStore((state) => state.updateQuery)
  const form = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchQuery: query
    }
  })

  const onSubmit = (data: SearchFormSchema) => {
    updateQuery(data.searchQuery)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-md flex items-center justify-between'
      >
        <FormField
          render={({ field }) => (
            <FormItem className='w-full mr-1'>
              <FormControl>
                <Input
                  className=''
                  maxLength={10}
                  minLength={1}
                  placeholder='What are you movie looging for?'
                  {...field}
                  autoFocus
                  size={12}
                />
              </FormControl>
            </FormItem>
          )}
          name={'searchQuery'}
        />

        <Button type='submit' className='flex items-center justify-between text-xs' size={"sm"}>
          <SearchIcon />
          {/* <span>
            Buscar
          </span> */}
        </Button>
      </form>
    </Form>
  )
}
