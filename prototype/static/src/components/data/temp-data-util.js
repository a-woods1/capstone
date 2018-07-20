export var previewScenes = [
	{
		id : "g-58th-ext-3",
		name : "58th Street Entrance",
		thumbnailUrl: "./textures/thumbnails/g-58th-ext-3-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/g-58th-ext-3.jpg"
		},
		defaultTarget : {
			lon: 130,
			lat: 0
		},
		annotations : [
			{
				position : {x: 79.25228692471325, y: 6.900493865194609, z: -59.77090501342626},
				data: "This is Bloomberg's 58th Street entrance. Please note that our accessible entrance is around the corner on Lexington Ave."
			},
		],
		linkedViews : [
			{
				id : "g-58th-ext-4",
				position : {
					x : 80.08221771677304,
					y : -17.234502709330496,
					z : -56.80645176044595
				}
			}
		]
	},
	{
		id : "g-58th-ext-4",
		name : "58th Street Entrance",
		thumbnailUrl: "./textures/thumbnails/g-58th-ext-4-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/g-58th-ext-4.jpg"
		},
		defaultTarget : {
			lon: 140,
			lat: 0
		},
		annotations : [
		],
		linkedViews : [
			{
				id : "g-58th-desk-2",
				position : {
					x : 80.08221771677304,
					y : -17.234502709330496,
					z : -56.80645176044595
				}
			},
			{
				id : "g-58th-ext-3",
				position : {
					x : -94.59626205489947,
					y : -14.488874408769167,
					z : -26.954093375591707
				}
			},
		]
	},
	{
		id : "g-58th-desk-2",
		name : "Front Desk",
		thumbnailUrl: "./textures/thumbnails/g-58th-desk-2-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/g-58th-desk-2.jpg"
		},
		defaultTarget : {
			lon: 234,
			lat: 0
		},
		annotations : [
			{
				position : {x: 80.76814795795869, y: -12.871571550248708, z: -56.985888762091655},
				data: "This is the front desk, where you'll pick up your badge when you first arrive. Remember to bring your photo ID."
			},
		],
		linkedViews : [
			{
				id : "g-58th-ext-4",
				position : {
					x : -51.17696489027431,
					y : -9.300011488574189,
					z : -84.97259706827363
				}
			},
			{
				id : "g-badge-1",
				position : {
					x : 53.62009118101684,
					y : -32.751212862098996,
					z : 77.47813491427092
				}
			}
		]
	},
	{
		id : "g-badge-1",
		name : "Badge Check-In",
		thumbnailUrl: "./textures/thumbnails/g-badge-1-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/g-badge-1.jpg"
		},
		defaultTarget : {
			lon: 150,
			lat: 0
		},
		annotations : [
			{
				position : {x: 27.122157190128906, y: -34.02372375480336, z: 89.43229579299191},
				data: "On your way to the elevators, you'll swipe your badge here with security."
			},
			{
				position : {x: -94.90924217188963, y: -17.912086800577526, z: -24.18149043861037},
				data: "The ground floor is equipped with an accessible lift in case there is a need to enter/exit from 58th Street."
			},
		],
		linkedViews : [
			{
				id : "g-58th-desk-2",
				position : {x: -60.431168025197394, y: -13.716595742928922, z: 77.77930492889767}
			},
			{
				id : "g-elevator-1",
				position : {x: 79.63020674150886, y: -37.91894701987222, z: 46.330229969100316}
			}
		]
	},
	{
		id : "g-elevator-1",
		name : "Elevators",
		thumbnailUrl: "./textures/thumbnails/g-elevator-1-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/g-elevator-1.jpg"
		},
		defaultTarget : {
			lon: -173,
			lat: 0
		},
		annotations : [
			{
				position : { x: 2.6579033694707292, y : -36.14314579219026, z : 92.88658189874228},
				data: "Take the elevators to the 6th floor (green means up!) and head to the pink couch."
			},
		],
		linkedViews : [
			{
				id : "g-badge-1",
				position : {x: -96.54587936972224, y: -19.74948818856563, z: 14.949712606989829}
			}
		]
	},
	{
		id : "6-elevator-2",
		name : "6-elevator-2",
		thumbnailUrl: "./textures/thumbnails/6-elevator-2-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-elevator-2.jpg"
		},
		defaultTarget : { lon: 182.7, lat: 3.9000000000000004 },
		annotations : [
		],
		linkedViews : [
			{
				id : "6-link-15",
				position : { x: 97.61542653700742, y: -20.4378185817479, z: -2.3398312249530617},
			}
		]
	},
	{
		id : "6-link-15",
		name : "6-link-15",
		thumbnailUrl: "./textures/thumbnails/6-link-15-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-link-15.jpg"
		},
		defaultTarget : { lon: 223.87119700017954, lat: 9.6 },		annotations : [
		],
		linkedViews : [
			{
				id : "6-link-13",
				position : { x: -5.508595320636543, y: -19.80142966432516, z: 97.46273796844545},
			},
			{
				id : "6-hall-2",
				position : { x: 4.10304551340135, y: -17.49905171275224, z: -97.97256620328037},
			},
		]
	},
	{
		id : "6-link-13",
		name : "6-link-13",
		thumbnailUrl: "./textures/thumbnails/6-link-13-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-link-13.jpg"
		},
		defaultTarget : { lon: 316.7985173992517, lat: 13.493561093732627 },
		annotations : [
		],
		linkedViews : [
			{
				id : "6-link-couch",
				position : { x: 15.992661526583976, y: -28.594965707937213, z: 94.22748106918164},
			},
			{
				id : "6-link-15",
				position : { x: 95.83823495678442, y: -20.389640963869635, z: -19.55067821424069},
			}
		]
	},
	{
		id : "6-link-couch",
		name : "6th Fl - Pink Couch",
		thumbnailUrl: "./textures/thumbnails/6-link-couch-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-link-couch.jpg"
		},
		defaultTarget : {
			lon: 0,
			lat: 0
		},
		annotations : [
		],
		linkedViews : [
			{
				id : "6-link-15",
				position : { x: 79.3925143738331, y: -24.210578865057204, z: 55.27013779421784},
			},
			{
				id : "6-link-13",
				position : { x: 91.50750961837069, y: -32.46400789027669, z: -22.194346398167195},
			},
		]
	},
	{
		id : "6-hall-2",
		name : "6-hall-2",
		thumbnailUrl: "./textures/thumbnails/6-hall-2-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-hall-2.jpg"
		},
		defaultTarget : {
			lon: -140,
			lat: 0
		},
		annotations : [
		],
		linkedViews : [
			{
				id : "6-link-15",
				position : { x: -78.89178933281124, y: -10.260402913916591, z: -59.879850896509424},
			},
			{
				id : "6-elevator-4",
				position : { x: 61.78884889044749, y: -24.266531003698727, z: -74.0247035261115},
			},
		]
	},
	{
		id : "6-elevator-4",
		name : "6-elevator-4",
		thumbnailUrl: "./textures/thumbnails/6-elevator-4-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/6-elevator-4.jpg"
		},
		defaultTarget : { lon: -174, lat: 8.3 },
		annotations : [
		],
		linkedViews : [
			{
				id : "6-hall-2",
				position : { x: -97.35014244606486, y: -16.78356352641377, z: -11.500198512403104},
			},
			{
				id : "6-elevator-4",
				position : { x: 61.78884889044749, y: -24.266531003698727, z: -74.0247035261115},
			},
		]
	},
	{
		id : "21wa-ext-1",
		name : "Interview Room - 21WA",
		thumbnailUrl: "./textures/thumbnails/21wa-ext-1-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/21wa-ext-1.jpg"
		},
		defaultTarget : { lon: 4.999999999999995, lat: 17.5 },		annotations : [
		],
		linkedViews : [
			{
				id : "21wa-int-1",
				position : { x: -70.27646600728644, y: -62.833804932069256, z: -32.66342791858685},			}
		]
	},
	{
		id : "21wa-int-1",
		name : "Interview Room - 21WA",
		thumbnailUrl: "./textures/thumbnails/21wa-int-1-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/21wa-int-1.jpg"
		},
		defaultTarget : { lon: 35.47119700017952, lat: 24.3 },
		annotations : [],
		linkedViews : [
			{
				id : "21wa-int-3",
				position : { x: -87.00405163364199, y: -42.923172421249916, z: 22.372603609591668},
			},
			{
				id : "21wa-int-4",
				position : { x: -91.9436596350545, y: -33.11629032656784, z: -19.956418961922928},
			},
		]
	},
	{
		id : "21wa-int-3",
		name : "Interview Room - 21WA",
		thumbnailUrl: "./textures/thumbnails/21wa-int-3-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/21wa-int-3.jpg"
		},
		defaultTarget : { lon: 386.1985173992517, lat: 25.493561093732623 },
		annotations : [
		],
		linkedViews : [
			{
				id : "21wa-int-1",
				position : { x: -39.960946336392894, y: -42.58837983178897, z: -80.58795531656958},			},
			{
				id : "21wa-int-4",
				position : { x: -75.98134776811061, y: -62.6333396535057, z: -16.58401669674255},			}
		]
	},
	{
		id : "21wa-int-4",
		name : "Interview Room - 21WA",
		thumbnailUrl: "./textures/thumbnails/21wa-int-4-thumb.jpg",
		texture : {
			textureType : "photo",
			textureUrl : "./textures/21wa-int-4.jpg"
		},
		defaultTarget : { lon: 386.1985173992517, lat: 25.493561093732623 },
		annotations : [
		],
		linkedViews : [
			{
				id : "21wa-int-3",
				position : { x: 33.57558188002136, y: -71.2103397983865, z: -61.223300692865315},			},
		]
	}
]
