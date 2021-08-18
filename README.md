## comento-jungsaemi

[#1] markup & router
- 공유주셨던 xd 파일 참고해서 markup(css) 작업! 
- 필요없는 기본 이미지/파일 등 삭제후에 html/css markup
- markup 정리 후에 router & component 페이지 세팅
- router : Main / Details 2페이지
<img width="600" alt="#1 markup" src="https://user-images.githubusercontent.com/79742210/129933840-014f2372-cef6-4eac-b636-b06f227f7547.png">
<img width="500" alt="#1 router" src="https://user-images.githubusercontent.com/79742210/129934298-7f37e71a-554b-4730-a047-07d99aef7e59.png">

[#2] store set
- store 셋팅 : articles + categories + ads
<img width="500" alt="#2 store" src="https://user-images.githubusercontent.com/79742210/129935499-8cf7e561-b988-4f9a-bc13-149d0c454f47.png">

[#3] api 연동
- 글 리스트/ 상세보기는 같은 주소로 연결
- method > 모두 get으로 가져와 read
- params 값 연동 (int, string, array)
- 글리스트 > category는 배열로 가져와야해서 'category[] = 1'의 형식으로 가져올 수 있었음..
- store > index.js 에 error 추가
<img width="1000" alt="#3 api" src="https://user-images.githubusercontent.com/79742210/129937238-d1d4886f-6165-4015-8c1c-a17fab794700.png">
<img width="500" alt="#3 error" src="https://user-images.githubusercontent.com/79742210/129937969-790cdf6d-bb24-4f0f-8fab-bcf41de708a7.png">


[#4] details 연동
- router-link로 details(component)로 이동하는 페이지 연결
- params는 id로 받아서 이동
- id값을 받는 articleRead() + 주소에 ${id}
<img width="523" alt="#4 routerlink" src="https://user-images.githubusercontent.com/79742210/129939139-2f7c662d-2769-4c6b-a679-c90a4c2492f8.png">
<img width="672" alt="#4 router-details-action" src="https://user-images.githubusercontent.com/79742210/129939170-a086457d-893a-47d6-8550-bf7dbe430fd6.png">

[#5] jest test
- 자꾸 array 뭐가 안된다고 뜬다.. fail..


