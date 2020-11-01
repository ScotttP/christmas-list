import uniqid from "uniqid";
const giftIdeas = [
	{
		id: uniqid(),
		name: "Playstation",
		price: "$500",
		notes: "Don't have to buy the whole console. Willing to split the cost",
		link:
			"https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149",
		image:
			"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426149_sd.jpg;maxHeight=640;maxWidth=550",
	},
	{
		id: uniqid(),
		name: "FIFA 21",
		price: "$60",
		notes:
			"Download version or physical disc. If download, needs to be on my account",
		link:
			"https://www.gamestop.com/video-games/playstation-4/games/products/fifa-21/217092.html?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiXY-dfdDwtpghjoFvQkHaXWO3S-1gWbHcHndf7DFD4XE4lm-yN1S68aAoo8EALw_wcB&gclsrc=aw.ds",
		image:
			"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415352_sd.jpg;maxHeight=640;maxWidth=550",
	},
	{
		id: uniqid(),
		name: "MLB The Show",
		price: "$60",
		notes:
			"Download version or physical disc. If download, needs to be on my account",
		link:
			"https://store.playstation.com/en-us/product/UP9000-CUSA17357_00-MLBTHESHOW20STND",
		image:
			"https://upload.wikimedia.org/wikipedia/en/b/bd/MLB_The_Show_20_cover.jpg",
	},
	{
		id: uniqid(),
		name: "Call of Duty",
		price: "$60",
		notes:
			"Download version or physical disc. If download, needs to be on my account",
		link:
			"https://www.gamestop.com/video-games/playstation-4/games/products/call-of-duty-black-ops-cold-war/217643.html?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiX7d7FPYrVgNP7q6_GiUytNKAuZI5rSb386od-fNwA4sxeVHAj1EMAaAmecEALw_wcB&gclsrc=aw.ds",
		image:
			"https://media.gamestop.com/i/gamestop/11103152/Call-of-Duty-Black-Ops-Cold-War",
	},
	{
		id: uniqid(),
		name: "Golf Shaft",
		price: "$100",
		notes:
			"Need to get with Golf Galaxy to find out what shaft goes well with my driver head",
		link: "",
		image: "",
	},
	{
		id: uniqid(),
		name: "Golf Practice Alignment Sticks",
		price: "$20",
		notes: "Need to look into the ones I need specifically",
		link:
			"https://www.dickssportinggoods.com/p/maxfli-collapsible-alignment-sticks-ss14mxflclpsalgn/ss14mxflclpsalgn?sku=14651948&camp=CSE:DSG_92700048881906592_lia_aud-1040333680752:pla-890579439277&segment=&gclid=Cj0KCQjwlvT8BRDeARIsAACRFiU9EJK9Km-UGrqWd6rd5y1FvXsWXVK-C6rYwqD5TJ6ujE8vIPsa2l8aAvSVEALw_wcB&gclsrc=aw.ds",
		image:
			"https://dks.scene7.com/is/image/GolfGalaxy/SS14MXFLCLPSALGN?qlt=70&wid=1100&fmt=webp",
	},
	{
		id: uniqid(),
		name: "ToolBox",
		price: "$50",
		notes:
			"Ask Dad about a good toolbox that I has most of the tools I would need",
		link: "",
		image:
			"https://shop.harborfreight.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/9/7/97532_I.jpg",
	},
	{
		id: uniqid(),
		name: "Oil Filter Wrench Cap",
		price: "$25",
		notes: "Ask Dad, he knows what I'm talking about",
		link: "",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlT8UVh6wPXdLVP7El6lyS9xteqmi7UgDR4HdlVydH4x5-f247Qts&usqp=CAc",
	},
	{
		id: uniqid(),
		name: "Levi Black Skinny Jeans",
		price: "$80",
		notes: "31 or 32 waist and 32 length",
		link:
			"https://www.levi.com/US/en_US/apparel/clothing/bottoms/510-skinny-fit-mens-jeans/p/055100414",
		image:
			"https://slimages.macys.com/is/image/MCY/products/0/optimized/15106940_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
	},
	{
		id: uniqid(),
		name: "Patagonia Baggies",
		price: "$55",
		notes: "Size Medium",
		link:
			"https://www.patagonia.com/product/mens-baggies-shorts-5-inch/190696742084.html?utm_source=google&utm_medium=cpc&utm_content=shopping&utm_campaign=shopping&utm_source=google&utm_medium=cpc&utm_campaign=Shopping%20-%20M%27s%20Sportswear&gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xanLe9ew8rIwzn-PyPluo_E5DB4N2FovFjdKIt_U3p3WIPiwgCLCmgaAvGbEALw_wcB",
		image:
			"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqnlCyBFEa8zGjYuT3Di08HDJ0YFtIiS7K26GjmYhdpUoFfHpyJbjONE88vd_-rD9gRRxlcj4Q0jBIkR3CQ9j9rHPX8REe",
	},
	{
		id: uniqid(),
		name: "Workout Shorts",
		price: "$35",
		notes: "Size Medium. 2 pack Black and Navy",
		link:
			"https://www.amazon.com/dp/B07SPJYYJV/ref=sspa_dk_detail_4?pd_rd_i=B07G2D366W&pd_rd_w=vznbO&pf_rd_p=f0355a48-7e73-489a-9590-564e12837b93&pd_rd_wg=Dj5rC&pf_rd_r=KQKV54252JE46JD6CYDQ&pd_rd_r=227902df-a3f4-4f4f-82d6-7c0dabb659f5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyT01YQjNKSEFGWkEzJmVuY3J5cHRlZElkPUEwNDk1ODc3STJENjU4QzBLVCZlbmNyeXB0ZWRBZElkPUEwMDU4MTUzMzg3TENORlBOVzdLNiZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&psc=1",
		image:
			"https://images-na.ssl-images-amazon.com/images/I/61hjs9vuocL._AC_SX679._SX._UX._SY._UY_.jpg",
	},
];

export default giftIdeas;
