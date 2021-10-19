import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '../application/Home'
import Rank from '../application/Rank'
import Recommend from '../application/Recommend'
import Singers from '../application/Singers'

export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/rank',
                component: Rank
            },
            {
                path: '/singers',
                component: Singers
            }
        ]
    }
]