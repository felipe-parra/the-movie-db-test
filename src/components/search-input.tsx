"use client"
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Form } from './ui/form'
import { Button } from './ui/button'
import { SearchIcon } from 'lucide-react'
import { SearchFormSchema, searchFormSchema } from '@/schemas/input.schema'


const INITIAL_STATE: SearchFormSchema = {
  searchQuery: ''
}

export default function SearchInput() {
  const form = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: INITIAL_STATE
  })

  const onSubmit = (data: SearchFormSchema) => {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-md flex items-center justify-between'
      >
        <Input
          className='mr-1'
          maxLength={10}
          minLength={1}
          placeholder='What are you movie looging for?'
        />

        <Button type='submit' className='flex items-center justify-between text-xs'>
          <SearchIcon />
          <span>
            Buscar
          </span>
        </Button>
      </form>
    </Form>
  )
}
