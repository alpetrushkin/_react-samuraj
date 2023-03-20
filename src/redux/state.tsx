export type FriendType = {
   id: number
   name: string
   avatar: string
}

export type PostType = {
   id: number
   title: string
   likes: number
}
export type  DialogsType = {
   id: number
   name: string
}
export type MessageType = {
   id: number
   message: string
   avatar: string
}

export type ProfilePageType = {
   post: PostType[]
}
export type DialogsPageType = {
   dialogs: DialogsType[]
   message: MessageType[]
}
export type FriendPageType = {
   friend: FriendType[]
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogsPageType
   friendPage: FriendPageType
}

let state: RootStateType = {
   profilePage: {
      post: [
         {id: 1, title: 'Hi hi', likes: 200},
         {id: 2, title: 'yo-yo-yo', likes: 75},
         {id: 3, title: 'Lorem*2', likes: 75},
         {id: 4, title: 'spartak', likes: 75}
      ]
   },
   dialogsPage: {
      dialogs: [
         {id: 1, name: 'Andrew'},
         {id: 2, name: 'Dmitry'},
         {id: 3, name: 'Sasha'},
         {id: 4, name: 'Sveta'},
         {id: 5, name: 'Valera'},
         {id: 6, name: 'Viktor'}
      ],
      message: [
         {
            id: 1,
            message: 'I am a normal popover and',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2022/05/russia-avatar-pixelbox.ru-14.jpg'
         },
         {
            id: 2,
            message: 'Yo-yo!!!',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2021/11/avatar-whatsapp-pixelbox.ru-36.jpg'
         },
         {id: 3, message: 'Hi my name is Alex!', avatar: 'https://webmg.ru/wp-content/uploads/2022/06/i-173-1.jpeg'},
         {
            id: 4,
            message: 'Yo2222',
            avatar: 'https://oir.mobi/uploads/posts/2021-04/1619454542_19-oir_mobi-p-krutoi-kot-zhivotnie-krasivo-foto-21.jpg'
         },
         {id: 5, message: 'Hello World!!!!!!!', avatar: 'https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg'}
      ]
   },
   friendPage: {
      friend: [
         {id: 1, name: 'Dima', avatar: 'https://zamanilka.ru/wp-content/uploads/2022/07/kotik-ava-060722-1.jpg'},
         {
            id: 1,
            name: 'Alex',
            avatar: 'https://pixelbox.ru/wp-content/uploads/2022/08/avatars-viber-pixelbox.ru-16.jpg'
         },
         {id: 1, name: 'Carol', avatar: 'https://coolsen.ru/wp-content/uploads/2021/09/141.jpg'},
      ]
   }
}

export const addPost = (title: string) => {
   let newPost = {id: 5, title: title, likes: 20}
   state.profilePage.post.push(newPost)
}

export default state;