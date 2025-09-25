    // export state= {...};        import {state} from "./SateBlog.js"
    const state = {
        items: [
            {
                id: 1,
                picture: 'blog1',
                subtitle:'PODCAST',
                title: 'Setup your own podcast',
                isHover: true,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
                date: 'Sep 12, 2021',
                btns: [ 
                    {                    
                        name: 'business'
                    },
                    {                    
                        name: 'startup'
                    },
                ]
            },
            {
                id: 2,
                picture: 'blog2',
                subtitle:'TIPS & TRICKs',
                title: 'Doodle artwork 101',
                isHover: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
                date: 'Sep 12, 2021',
                btns: [ 
                    {                    
                        name: 'art'
                    },
                    {                    
                        name: 'tips and trick'
                    },
                    {                    
                        name: 'creative'
                    },

                ]
            },
            {
                id: 3,
                picture: 'blog3',
                subtitle:'NEWS',
                title: 'Mother Nature Taking Over',
                isHover: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
                date: 'Sep 12, 2021',
                btns: [ 
                    {                    
                        name: 'news'
                    },
                    {                    
                        name: 'nature'
                    }
                ]
            },
            {
                id: 4,
                picture: 'blog4',
                subtitle:'PRODUCTIVITY',
                title: 'How to Be Productive',
                isHover: false,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...',
                date: 'Sep 12, 2021',
                btns: [ 
                    {                    
                        name: 'productivity'
                    },
                    {                    
                        name: 'mindset'
                    }
                ]
            }
        
        ]
    }
    export default state;
    // export default state; import state from "./SateBlog.js"
