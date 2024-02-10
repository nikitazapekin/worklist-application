
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SliderCarouselComponent from "../../components/SliderCarousel/SliderCarousel";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";

const Homepage = () => {
	const navigate = useNavigate()
    return ( 
        <>
            <NavBar />
            <Global />
            <SliderCarouselComponent />
           <Footer />
		   <button onClick={()=> navigate("/test/1")}>dsdfssf</button>
        </>
     );
}

export default Homepage;

// yarn run lint
// yarn eslint --fix "src/**/*.tsx"

//  "strictNullChecks": true, tsconfig

/*
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["plugin:react/recommended", "standard-with-typescript", "prettier"],
	"overrides": [],
	"parserOptions": {
		"project": ["./tsconfig.json"],
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint", "simple-import-sort"],
	"rules": {
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"simple-import-sort/exports": "error",
		"no-unmodified-loop-condition": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/triple-slash-reference": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"react/react-in-jsx-scope": "off",
	"import/order": [
			"error",
			{
				"pathGroups": [
					{
						"pattern": "react",
						"group": "external",
						"position": "before"
					},
					{
						"pattern": "@*",
						"group": "external",
						"position": "after"
					}
				],
				"pathGroupsExcludedImportTypes": ["react"],
				"newlines-between": "always",
				"groups": ["external", "builtin", "index", "sibling", "parent", "internal", "object", "type"]
			}
		] 
	}
}
*/