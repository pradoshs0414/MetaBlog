import React, {useCallback, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import TextEditor from '../TextEditor'
import Select from '../Select'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import service from '../../appwrite/config'
import  Container  from '../Container/Container'


const CreateForm = ({post}) => {
    const {register,handleSubmit,watch,setValue,getValues,control} = useForm(
        {defaultValues:{
            title:post?.title || "",
            slug:post?.slug ||"",
            content:post?.content || "",
            status:post?.status||"active"
        }
    }
    )

    const navigate = useNavigate()
    const userData = useSelector(state=>state.auth.authData)
    const Submit = async (data) => {}

    const transformSlug = useCallback((value) => {
        if(str && typeof str === 'string')
        return str.toLowerCase()
                .trim()
                .replace(/ /g,'-')
                .replace(/[^a-zA-Z\d\s]+/g, "-")
    
        return ''
    },[])

    useEffect(() => {
        watch((value,{name})=>{
            if(name === 'title'){
                setValue('slug',transformSlug(value.title),{shouldValidate:true})
            }
        })
    },[watch,transformSlug,setValue])
  return (
    <Container >
        Add Form Content
    </Container>
  )
}

export default CreateForm