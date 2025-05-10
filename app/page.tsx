'use client'
import { WebSocketClient } from '@/lib/Mysocket'
import React, { useEffect, useRef, useState } from 'react'


function page() {

  const socket = useRef<WebSocketClient | null>(null)
  const [status, setstatus] = useState<string>("")

  const [datafromserver, setdatafromserver] = useState<Array<string>>([])


  const [datafromserver2, setdatafromserver2] = useState<Array<string>>([])

  useEffect(() => {
    socket.current = new WebSocketClient('ws://127.0.0.1:8000/ws/122')

    socket.current.connect()

    socket.current.getmessage((res) => {
      switch (res.data_type) {
        case 'nmap':
          setdatafromserver(prev => [...prev, res.data.message!])
          break;

        case 'ping':
          setdatafromserver2(prev => [...prev, res.data.message!])
          break;

        default:
          break;
      }

      console.log(res)
    })


    return () => {
      socket.current?.disconnect()

    }
  }, [])


  function starttask() {
    socket.current?.sendtoserver("nmap-start", "")
  }

  function stoptask() {
    socket.current?.sendtoserver("nmap-stop", "")
  }

  function starttask2() {
    socket.current?.sendtoserver("ping-start", "")
  }

  function stoptask2() {
    socket.current?.sendtoserver("ping-stop", "")
  }




  return (
    <div
      className='flex justify-center gap-5 items-center flex-col'
    >
      <div
        className='flex flex-row gap-4'
      >
        <button onClick={starttask} className='bg-amber-200 hover:bg-amber-300 text-black w-50 h-20 p-5'>
          start task1
        </button>

        <button onClick={stoptask} className='bg-red-600 hover:bg-red-300 text-black w-50 h-20 p-5'>
          stop task1
        </button>
      </div>

      <div className=' w-full max-w-2xl mx-auto'>
        <textarea
          readOnly
          ref={(textarea) => {
            if (textarea) {
              textarea.scrollTop = textarea.scrollHeight;
            }
          }}
          value={datafromserver.join('\n')}
          className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200 min-h-[200px]'
        />
      </div>


      <div
        className='flex flex-row gap-4'
      >
        <button onClick={starttask2} className='bg-amber-200 hover:bg-amber-300 text-black w-50 h-20 p-5'>
          start task2
        </button>

        <button onClick={stoptask2} className='bg-red-600 hover:bg-red-300 text-black w-50 h-20 p-5'>
          stop task2
        </button>
      </div>

      <div className=' w-full max-w-2xl mx-auto'>
        <textarea
          readOnly
          ref={(textarea) => {
            if (textarea) {
              textarea.scrollTop = textarea.scrollHeight;
            }
          }}
          value={datafromserver2.join('\n')}
          className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200 min-h-[200px]'
        />
      </div>
    </div>
  )
}

export default page