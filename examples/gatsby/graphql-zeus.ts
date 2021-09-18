/* tslint:disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		imageSharp:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			fixed:{
				type:"ImageSharpFixedFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			resolutions:{
				type:"ImageSharpResolutionsFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			fluid:{
				type:"ImageSharpFluidFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sizes:{
				type:"ImageSharpSizesFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			original:{
				type:"ImageSharpOriginalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			resize:{
				type:"ImageSharpResizeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allImageSharp:{
			filter:{
				type:"ImageSharpFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"ImageSharpSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		file:{
			birthtime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			birthtimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sourceInstanceName:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			absolutePath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			relativePath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			extension:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			size:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			prettySize:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			modifiedTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			accessTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			changeTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			birthTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			root:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			dir:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			base:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ext:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			relativeDirectory:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			dev:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mode:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			nlink:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			uid:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			gid:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			rdev:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			blksize:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ino:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			blocks:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			atimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mtimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ctimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			atime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mtime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ctime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			publicURL:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			childMdx:{
				type:"MdxFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			childImageSharp:{
				type:"ImageSharpFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			childrenAuthorsYaml:{
				type:"AuthorsYamlFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allFile:{
			filter:{
				type:"FileFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"FileSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		mdx:{
			rawBody:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			fileAbsolutePath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			frontmatter:{
				type:"MdxFrontmatterFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			body:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			excerpt:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			headings:{
				type:"MdxHeadingMdxFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			html:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mdxAST:{
				type:"JSONQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			tableOfContents:{
				type:"JSONQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			timeToRead:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			wordCount:{
				type:"MdxWordCountFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allMdx:{
			filter:{
				type:"MdxFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"MdxSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		article:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			slug:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			title:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			date:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			author:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			excerpt:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			body:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			hero:{
				type:"FileFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			timeToRead:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allArticle:{
			filter:{
				type:"ArticleFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"ArticleSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		markdownRemark:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			html:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			htmlAst:{
				type:"JSONQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			excerpt:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			excerptAst:{
				type:"JSONQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			headings:{
				type:"MarkdownHeadingFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			timeToRead:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			tableOfContents:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			wordCount:{
				type:"MarkdownWordCountFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allMarkdownRemark:{
			filter:{
				type:"MarkdownRemarkFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"MarkdownRemarkSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sitePage:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			path:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internalComponentName:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			component:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			componentChunkName:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			isCreatedByStatefulCreatePages:{
				type:"BooleanQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			context:{
				type:"SitePageContextFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			pluginCreator:{
				type:"SitePluginFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			pluginCreatorId:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			componentPath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allSitePage:{
			filter:{
				type:"SitePageFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"SitePageSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		sitePlugin:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			resolve:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			version:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			pluginOptions:{
				type:"SitePluginPluginOptionsFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			nodeAPIs:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			browserAPIs:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ssrAPIs:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			pluginFilepath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			packageJson:{
				type:"SitePluginPackageJsonFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allSitePlugin:{
			filter:{
				type:"SitePluginFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"SitePluginSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		site:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			siteMetadata:{
				type:"SiteSiteMetadataFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			port:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			host:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mapping:{
				type:"SiteMappingFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			polyfill:{
				type:"BooleanQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			pathPrefix:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			buildTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allSite:{
			filter:{
				type:"SiteFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"SiteSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		directory:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sourceInstanceName:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			absolutePath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			relativePath:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			extension:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			size:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			prettySize:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			modifiedTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			accessTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			changeTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			birthTime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			root:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			dir:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			base:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ext:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			relativeDirectory:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			dev:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mode:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			nlink:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			uid:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			gid:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			rdev:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			blksize:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ino:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			blocks:{
				type:"IntQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			atimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mtimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ctimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			birthtimeMs:{
				type:"FloatQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			atime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			mtime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			ctime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			birthtime:{
				type:"DateQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allDirectory:{
			filter:{
				type:"DirectoryFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"DirectorySortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		authorsYaml:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			bio:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			avatar:{
				type:"FileFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			featured:{
				type:"BooleanQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			social:{
				type:"AuthorsYamlSocialFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allAuthorsYaml:{
			filter:{
				type:"AuthorsYamlFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"AuthorsYamlSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		author:{
			id:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			parent:{
				type:"NodeFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			children:{
				type:"NodeFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			internal:{
				type:"InternalFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			name:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			bio:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			avatar:{
				type:"FileFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			featured:{
				type:"BooleanQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			social:{
				type:"AuthorSocialFilterListInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			authorsPage:{
				type:"BooleanQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			slug:{
				type:"StringQueryOperatorInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allAuthor:{
			filter:{
				type:"AuthorFilterInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			sort:{
				type:"AuthorSortInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	StringQueryOperatorInput:{
		eq:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		regex:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		glob:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpFixedFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		width:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FloatQueryOperatorInput:{
		eq:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"Float",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"Float",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpResolutionsFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		width:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalImg:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		presentationWidth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		presentationHeight:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	IntQueryOperatorInput:{
		eq:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		gte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		lte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpSizesFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalImg:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		presentationWidth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		presentationHeight:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpOriginalFilterInput:{
		width:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpResizeFilterInput:{
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		width:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NodeFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NodeFilterListInput:{
		elemMatch:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	InternalFilterInput:{
		content:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentDigest:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		fieldOwners:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ignoreType:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mediaType:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		type:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BooleanQueryOperatorInput:{
		eq:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"Boolean",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"Boolean",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharp:{
		fixed:{
			width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			height:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			base64Width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			jpegProgressive:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionSpeed:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			grayscale:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			duotone:{
				type:"DuotoneGradient",
				array:false,
				arrayRequired:false,
				required:false
			},
			traceSVG:{
				type:"Potrace",
				array:false,
				arrayRequired:false,
				required:false
			},
			quality:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormat:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormatBase64:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			cropFocus:{
				type:"ImageCropFocus",
				array:false,
				arrayRequired:false,
				required:false
			},
			fit:{
				type:"ImageFit",
				array:false,
				arrayRequired:false,
				required:false
			},
			background:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			rotate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			trim:{
				type:"Float",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		resolutions:{
			width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			height:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			base64Width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			jpegProgressive:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionSpeed:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			grayscale:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			duotone:{
				type:"DuotoneGradient",
				array:false,
				arrayRequired:false,
				required:false
			},
			traceSVG:{
				type:"Potrace",
				array:false,
				arrayRequired:false,
				required:false
			},
			quality:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormat:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormatBase64:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			cropFocus:{
				type:"ImageCropFocus",
				array:false,
				arrayRequired:false,
				required:false
			},
			fit:{
				type:"ImageFit",
				array:false,
				arrayRequired:false,
				required:false
			},
			background:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			rotate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			trim:{
				type:"Float",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		fluid:{
			maxWidth:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			maxHeight:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			base64Width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			grayscale:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			jpegProgressive:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionSpeed:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			duotone:{
				type:"DuotoneGradient",
				array:false,
				arrayRequired:false,
				required:false
			},
			traceSVG:{
				type:"Potrace",
				array:false,
				arrayRequired:false,
				required:false
			},
			quality:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormat:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormatBase64:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			cropFocus:{
				type:"ImageCropFocus",
				array:false,
				arrayRequired:false,
				required:false
			},
			fit:{
				type:"ImageFit",
				array:false,
				arrayRequired:false,
				required:false
			},
			background:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			rotate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			trim:{
				type:"Float",
				array:false,
				arrayRequired:false,
				required:false
			},
			sizes:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			srcSetBreakpoints:{
				type:"Int",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		sizes:{
			maxWidth:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			maxHeight:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			base64Width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			grayscale:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			jpegProgressive:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionSpeed:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			duotone:{
				type:"DuotoneGradient",
				array:false,
				arrayRequired:false,
				required:false
			},
			traceSVG:{
				type:"Potrace",
				array:false,
				arrayRequired:false,
				required:false
			},
			quality:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormat:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormatBase64:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			cropFocus:{
				type:"ImageCropFocus",
				array:false,
				arrayRequired:false,
				required:false
			},
			fit:{
				type:"ImageFit",
				array:false,
				arrayRequired:false,
				required:false
			},
			background:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			rotate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			trim:{
				type:"Float",
				array:false,
				arrayRequired:false,
				required:false
			},
			sizes:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			srcSetBreakpoints:{
				type:"Int",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		resize:{
			width:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			height:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			quality:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			jpegProgressive:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionLevel:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			pngCompressionSpeed:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			grayscale:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			duotone:{
				type:"DuotoneGradient",
				array:false,
				arrayRequired:false,
				required:false
			},
			base64:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			traceSVG:{
				type:"Potrace",
				array:false,
				arrayRequired:false,
				required:false
			},
			toFormat:{
				type:"ImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			},
			cropFocus:{
				type:"ImageCropFocus",
				array:false,
				arrayRequired:false,
				required:false
			},
			fit:{
				type:"ImageFit",
				array:false,
				arrayRequired:false,
				required:false
			},
			background:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			rotate:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			trim:{
				type:"Float",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	DuotoneGradient:{
		highlight:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		shadow:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		opacity:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Potrace:{
		turnPolicy:{
			type:"PotraceTurnPolicy",
			array:false,
			arrayRequired:false,
			required:false
		},
		turdSize:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		alphaMax:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		optCurve:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		optTolerance:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		threshold:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		blackOnWhite:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		color:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		background:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PotraceTurnPolicy: "enum",
	ImageFormat: "enum",
	ImageCropFocus: "enum",
	ImageFit: "enum",
	ImageSharpFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		fixed:{
			type:"ImageSharpFixedFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		resolutions:{
			type:"ImageSharpResolutionsFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		fluid:{
			type:"ImageSharpFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"ImageSharpSizesFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		original:{
			type:"ImageSharpOriginalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		resize:{
			type:"ImageSharpResizeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpSortInput:{
		fields:{
			type:"ImageSharpFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ImageSharpFieldsEnum: "enum",
	SortOrderEnum: "enum",
	ImageSharpConnection:{
		distinct:{
			field:{
				type:"ImageSharpFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"ImageSharpFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DateQueryOperatorInput:{
		eq:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		gt:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		gte:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		lt:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		lte:{
			type:"Date",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"Date",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"Date",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	Date: "String",
	MdxFilterInput:{
		rawBody:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		fileAbsolutePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		frontmatter:{
			type:"MdxFrontmatterFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		body:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		headings:{
			type:"MdxHeadingMdxFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		html:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mdxAST:{
			type:"JSONQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tableOfContents:{
			type:"JSONQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		timeToRead:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		wordCount:{
			type:"MdxWordCountFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MdxFrontmatterFilterInput:{
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"AuthorsYamlFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		date:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"FileFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorsYamlFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		bio:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"FileFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		featured:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"AuthorsYamlSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FileFilterInput:{
		birthtime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		birthtimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sourceInstanceName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		absolutePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		relativePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		size:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		prettySize:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		modifiedTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		changeTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		birthTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		root:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dir:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		base:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ext:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		relativeDirectory:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dev:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mode:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		nlink:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		uid:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		gid:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		rdev:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blksize:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ino:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		atimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mtimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ctimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		atime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mtime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ctime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		publicURL:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		childMdx:{
			type:"MdxFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		childImageSharp:{
			type:"ImageSharpFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		childrenAuthorsYaml:{
			type:"AuthorsYamlFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorsYamlFilterListInput:{
		elemMatch:{
			type:"AuthorsYamlFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorsYamlSocialFilterListInput:{
		elemMatch:{
			type:"AuthorsYamlSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorsYamlSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MdxHeadingMdxFilterListInput:{
		elemMatch:{
			type:"MdxHeadingMdxFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MdxHeadingMdxFilterInput:{
		value:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		depth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	JSONQueryOperatorInput:{
		eq:{
			type:"JSON",
			array:false,
			arrayRequired:false,
			required:false
		},
		ne:{
			type:"JSON",
			array:false,
			arrayRequired:false,
			required:false
		},
		in:{
			type:"JSON",
			array:true,
			arrayRequired:false,
			required:false
		},
		nin:{
			type:"JSON",
			array:true,
			arrayRequired:false,
			required:false
		},
		regex:{
			type:"JSON",
			array:false,
			arrayRequired:false,
			required:false
		},
		glob:{
			type:"JSON",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	JSON: "String",
	MdxWordCountFilterInput:{
		paragraphs:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sentences:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		words:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	File:{
		modifiedTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		accessTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		changeTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		birthTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		atime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		mtime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		ctime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Mdx:{
		excerpt:{
			pruneLength:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		headings:{
			depth:{
				type:"HeadingsMdx",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tableOfContents:{
			maxDepth:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	MdxFrontmatter:{
		date:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	HeadingsMdx: "enum",
	FileSortInput:{
		fields:{
			type:"FileFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	FileFieldsEnum: "enum",
	FileConnection:{
		distinct:{
			field:{
				type:"FileFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"FileFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	MdxSortInput:{
		fields:{
			type:"MdxFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	MdxFieldsEnum: "enum",
	MdxConnection:{
		distinct:{
			field:{
				type:"MdxFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"MdxFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Article:{
		date:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		excerpt:{
			pruneLength:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ArticleFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		date:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		body:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"FileFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		timeToRead:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ArticleSortInput:{
		fields:{
			type:"ArticleFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ArticleFieldsEnum: "enum",
	ArticleConnection:{
		distinct:{
			field:{
				type:"ArticleFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"ArticleFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	MarkdownHeadingFilterListInput:{
		elemMatch:{
			type:"MarkdownHeadingFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MarkdownHeadingFilterInput:{
		value:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		depth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MarkdownWordCountFilterInput:{
		paragraphs:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sentences:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		words:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MarkdownRemark:{
		excerpt:{
			pruneLength:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			truncate:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			format:{
				type:"MarkdownExcerptFormats",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		excerptAst:{
			pruneLength:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			truncate:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		headings:{
			depth:{
				type:"MarkdownHeadingLevels",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		tableOfContents:{
			pathToSlugField:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			maxDepth:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			heading:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	MarkdownExcerptFormats: "enum",
	MarkdownHeadingLevels: "enum",
	MarkdownRemarkFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		html:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		htmlAst:{
			type:"JSONQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerptAst:{
			type:"JSONQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		headings:{
			type:"MarkdownHeadingFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		timeToRead:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tableOfContents:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		wordCount:{
			type:"MarkdownWordCountFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	MarkdownRemarkSortInput:{
		fields:{
			type:"MarkdownRemarkFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	MarkdownRemarkFieldsEnum: "enum",
	MarkdownRemarkConnection:{
		distinct:{
			field:{
				type:"MarkdownRemarkFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"MarkdownRemarkFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SitePageContextFilterInput:{
		basePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		skip:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		limit:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		group:{
			type:"SitePageContextGroupFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pathPrefix:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		first:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		last:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		index:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pageCount:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		additionalContext:{
			type:"SitePageContextAdditionalContextFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		article:{
			type:"SitePageContextArticleFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		authors:{
			type:"SitePageContextAuthorsFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"SitePageContextAuthorFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalPath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupFilterListInput:{
		elemMatch:{
			type:"SitePageContextGroupFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupFilterInput:{
		node:{
			type:"SitePageContextGroupNodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		date:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dateForSEO:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		timeToRead:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		body:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"SitePageContextGroupNodeHeroFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroFilterInput:{
		full:{
			type:"SitePageContextGroupNodeHeroFullFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		regular:{
			type:"SitePageContextGroupNodeHeroRegularFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		narrow:{
			type:"SitePageContextGroupNodeHeroNarrowFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		seo:{
			type:"SitePageContextGroupNodeHeroSeoFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroFullFilterInput:{
		fluid:{
			type:"SitePageContextGroupNodeHeroFullFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroFullFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroRegularFilterInput:{
		fluid:{
			type:"SitePageContextGroupNodeHeroRegularFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroRegularFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroNarrowFilterInput:{
		fluid:{
			type:"SitePageContextGroupNodeHeroNarrowFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroNarrowFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroSeoFilterInput:{
		fixed:{
			type:"SitePageContextGroupNodeHeroSeoFixedFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextGroupNodeHeroSeoFixedFilterInput:{
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextFilterInput:{
		basePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		skip:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		limit:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"SitePageContextAdditionalContextAuthorFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalPath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorFilterInput:{
		authorsPage:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		bio:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"SitePageContextAdditionalContextAuthorSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"SitePageContextAdditionalContextAuthorAvatarFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorSocialFilterListInput:{
		elemMatch:{
			type:"SitePageContextAdditionalContextAuthorSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarFilterInput:{
		small:{
			type:"SitePageContextAdditionalContextAuthorAvatarSmallFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		medium:{
			type:"SitePageContextAdditionalContextAuthorAvatarMediumFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		large:{
			type:"SitePageContextAdditionalContextAuthorAvatarLargeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarSmallFilterInput:{
		fluid:{
			type:"SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarMediumFilterInput:{
		fluid:{
			type:"SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarLargeFilterInput:{
		fluid:{
			type:"SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		date:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dateForSEO:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		timeToRead:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		excerpt:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		body:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"SitePageContextArticleHeroFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroFilterInput:{
		full:{
			type:"SitePageContextArticleHeroFullFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		regular:{
			type:"SitePageContextArticleHeroRegularFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		narrow:{
			type:"SitePageContextArticleHeroNarrowFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		seo:{
			type:"SitePageContextArticleHeroSeoFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroFullFilterInput:{
		fluid:{
			type:"SitePageContextArticleHeroFullFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroFullFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroRegularFilterInput:{
		fluid:{
			type:"SitePageContextArticleHeroRegularFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroRegularFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroNarrowFilterInput:{
		fluid:{
			type:"SitePageContextArticleHeroNarrowFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroNarrowFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroSeoFilterInput:{
		fixed:{
			type:"SitePageContextArticleHeroSeoFixedFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextArticleHeroSeoFixedFilterInput:{
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsFilterListInput:{
		elemMatch:{
			type:"SitePageContextAuthorsFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsFilterInput:{
		node:{
			type:"SitePageContextAuthorsNodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeFilterInput:{
		authorsPage:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		bio:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"SitePageContextAuthorsNodeSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"SitePageContextAuthorsNodeAvatarFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeSocialFilterListInput:{
		elemMatch:{
			type:"SitePageContextAuthorsNodeSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarFilterInput:{
		small:{
			type:"SitePageContextAuthorsNodeAvatarSmallFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		medium:{
			type:"SitePageContextAuthorsNodeAvatarMediumFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		large:{
			type:"SitePageContextAuthorsNodeAvatarLargeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarSmallFilterInput:{
		fluid:{
			type:"SitePageContextAuthorsNodeAvatarSmallFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarSmallFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarMediumFilterInput:{
		fluid:{
			type:"SitePageContextAuthorsNodeAvatarMediumFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarMediumFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarLargeFilterInput:{
		fluid:{
			type:"SitePageContextAuthorsNodeAvatarLargeFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorsNodeAvatarLargeFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorFilterInput:{
		authorsPage:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		bio:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"SitePageContextAuthorSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"SitePageContextAuthorAvatarFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorSocialFilterListInput:{
		elemMatch:{
			type:"SitePageContextAuthorSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarFilterInput:{
		small:{
			type:"SitePageContextAuthorAvatarSmallFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		medium:{
			type:"SitePageContextAuthorAvatarMediumFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		large:{
			type:"SitePageContextAuthorAvatarLargeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarSmallFilterInput:{
		fluid:{
			type:"SitePageContextAuthorAvatarSmallFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarSmallFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarMediumFilterInput:{
		fluid:{
			type:"SitePageContextAuthorAvatarMediumFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarMediumFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarLargeFilterInput:{
		fluid:{
			type:"SitePageContextAuthorAvatarLargeFluidFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageContextAuthorAvatarLargeFluidFilterInput:{
		base64:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspectRatio:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		src:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSet:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		srcSetWebp:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sizes:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		resolve:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pluginOptions:{
			type:"SitePluginPluginOptionsFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		nodeAPIs:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		browserAPIs:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ssrAPIs:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pluginFilepath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		packageJson:{
			type:"SitePluginPackageJsonFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPluginOptionsFilterInput:{
		path:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		extensions:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		gatsbyRemarkPlugins:{
			type:"SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		displayName:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentPosts:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		contentAuthors:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		authorsPage:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		basePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		short_name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		start_url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		background_color:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		theme_color:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		display:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		icon:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pathCheck:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput:{
		elemMatch:{
			type:"SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput:{
		resolve:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		options:{
			type:"SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput:{
		maxWidth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkImagesToOriginal:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		quality:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		withWebp:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pathPrefix:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		wrapperStyle:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backgroundColor:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		showCaptions:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		tracedSVG:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		loading:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		main:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		license:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dependencies:{
			type:"SitePluginPackageJsonDependenciesFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		devDependencies:{
			type:"SitePluginPackageJsonDevDependenciesFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		peerDependencies:{
			type:"SitePluginPackageJsonPeerDependenciesFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		keywords:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonDependenciesFilterListInput:{
		elemMatch:{
			type:"SitePluginPackageJsonDependenciesFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonDependenciesFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonDevDependenciesFilterListInput:{
		elemMatch:{
			type:"SitePluginPackageJsonDevDependenciesFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonDevDependenciesFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonPeerDependenciesFilterListInput:{
		elemMatch:{
			type:"SitePluginPackageJsonPeerDependenciesFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginPackageJsonPeerDependenciesFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		version:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		path:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internalComponentName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		component:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		componentChunkName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		isCreatedByStatefulCreatePages:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		context:{
			type:"SitePageContextFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pluginCreator:{
			type:"SitePluginFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pluginCreatorId:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		componentPath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SitePageSortInput:{
		fields:{
			type:"SitePageFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	SitePageFieldsEnum: "enum",
	SitePageConnection:{
		distinct:{
			field:{
				type:"SitePageFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"SitePageFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SitePluginSortInput:{
		fields:{
			type:"SitePluginFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	SitePluginFieldsEnum: "enum",
	SitePluginConnection:{
		distinct:{
			field:{
				type:"SitePluginFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"SitePluginFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	SiteSiteMetadataFilterInput:{
		title:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		siteUrl:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"SiteSiteMetadataHeroFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"SiteSiteMetadataSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteSiteMetadataHeroFilterInput:{
		heading:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxWidth:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteSiteMetadataSocialFilterListInput:{
		elemMatch:{
			type:"SiteSiteMetadataSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteSiteMetadataSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteMappingFilterInput:{
		Mdx_frontmatter_author:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	Site:{
		buildTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	SiteFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		siteMetadata:{
			type:"SiteSiteMetadataFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		port:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		host:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mapping:{
			type:"SiteMappingFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		polyfill:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		pathPrefix:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		buildTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteSortInput:{
		fields:{
			type:"SiteFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	SiteFieldsEnum: "enum",
	SiteConnection:{
		distinct:{
			field:{
				type:"SiteFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"SiteFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Directory:{
		modifiedTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		accessTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		changeTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		birthTime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		atime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		mtime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		ctime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		birthtime:{
			formatString:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			fromNow:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			},
			difference:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			locale:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	DirectoryFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		sourceInstanceName:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		absolutePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		relativePath:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		size:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		prettySize:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		modifiedTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		changeTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		birthTime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		root:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dir:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		base:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ext:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		relativeDirectory:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		dev:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mode:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		nlink:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		uid:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		gid:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		rdev:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blksize:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ino:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks:{
			type:"IntQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		atimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mtimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ctimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		birthtimeMs:{
			type:"FloatQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		atime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		mtime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		ctime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		birthtime:{
			type:"DateQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DirectorySortInput:{
		fields:{
			type:"DirectoryFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	DirectoryFieldsEnum: "enum",
	DirectoryConnection:{
		distinct:{
			field:{
				type:"DirectoryFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"DirectoryFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	AuthorsYamlSortInput:{
		fields:{
			type:"AuthorsYamlFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AuthorsYamlFieldsEnum: "enum",
	AuthorsYamlConnection:{
		distinct:{
			field:{
				type:"AuthorsYamlFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"AuthorsYamlFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	AuthorSocialFilterListInput:{
		elemMatch:{
			type:"AuthorSocialFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorSocialFilterInput:{
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		url:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorFilterInput:{
		id:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		parent:{
			type:"NodeFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		children:{
			type:"NodeFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		internal:{
			type:"InternalFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		bio:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"FileFilterInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		featured:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		social:{
			type:"AuthorSocialFilterListInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		authorsPage:{
			type:"BooleanQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"StringQueryOperatorInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	AuthorSortInput:{
		fields:{
			type:"AuthorFieldsEnum",
			array:true,
			arrayRequired:false,
			required:false
		},
		order:{
			type:"SortOrderEnum",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	AuthorFieldsEnum: "enum",
	AuthorConnection:{
		distinct:{
			field:{
				type:"AuthorFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		group:{
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			field:{
				type:"AuthorFieldsEnum",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	link:{
		by:{
			id:{
				type:"StringValue",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	childOf:{
		many:{
			false:{
				type:"BooleanValue",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		imageSharp:"ImageSharp",
		allImageSharp:"ImageSharpConnection",
		file:"File",
		allFile:"FileConnection",
		mdx:"Mdx",
		allMdx:"MdxConnection",
		article:"Article",
		allArticle:"ArticleConnection",
		markdownRemark:"MarkdownRemark",
		allMarkdownRemark:"MarkdownRemarkConnection",
		sitePage:"SitePage",
		allSitePage:"SitePageConnection",
		sitePlugin:"SitePlugin",
		allSitePlugin:"SitePluginConnection",
		site:"Site",
		allSite:"SiteConnection",
		directory:"Directory",
		allDirectory:"DirectoryConnection",
		authorsYaml:"AuthorsYaml",
		allAuthorsYaml:"AuthorsYamlConnection",
		author:"Author",
		allAuthor:"AuthorConnection"
	},
	ImageSharp:{
		id:"ID",
		fixed:"ImageSharpFixed",
		resolutions:"ImageSharpResolutions",
		fluid:"ImageSharpFluid",
		sizes:"ImageSharpSizes",
		original:"ImageSharpOriginal",
		resize:"ImageSharpResize",
		parent:"Node",
		children:"Node",
		internal:"Internal"
	},
	Node:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal"
	},
	Internal:{
		content:"String",
		contentDigest:"String",
		description:"String",
		fieldOwners:"String",
		ignoreType:"Boolean",
		mediaType:"String",
		owner:"String",
		type:"String"
	},
	ImageSharpFixed:{
		base64:"String",
		tracedSVG:"String",
		aspectRatio:"Float",
		width:"Float",
		height:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		originalName:"String"
	},
	ImageSharpResolutions:{
		base64:"String",
		tracedSVG:"String",
		aspectRatio:"Float",
		width:"Float",
		height:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		originalName:"String"
	},
	ImageSharpFluid:{
		base64:"String",
		tracedSVG:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String",
		originalImg:"String",
		originalName:"String",
		presentationWidth:"Int",
		presentationHeight:"Int"
	},
	ImageSharpSizes:{
		base64:"String",
		tracedSVG:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String",
		originalImg:"String",
		originalName:"String",
		presentationWidth:"Int",
		presentationHeight:"Int"
	},
	ImageSharpOriginal:{
		width:"Float",
		height:"Float",
		src:"String"
	},
	ImageSharpResize:{
		src:"String",
		tracedSVG:"String",
		width:"Int",
		height:"Int",
		aspectRatio:"Float",
		originalName:"String"
	},
	ImageSharpConnection:{
		totalCount:"Int",
		edges:"ImageSharpEdge",
		nodes:"ImageSharp",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"ImageSharpGroupConnection"
	},
	ImageSharpEdge:{
		next:"ImageSharp",
		node:"ImageSharp",
		previous:"ImageSharp"
	},
	PageInfo:{
		currentPage:"Int",
		hasPreviousPage:"Boolean",
		hasNextPage:"Boolean",
		itemCount:"Int",
		pageCount:"Int",
		perPage:"Int"
	},
	ImageSharpGroupConnection:{
		totalCount:"Int",
		edges:"ImageSharpEdge",
		nodes:"ImageSharp",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	File:{
		birthtime:"Date",
		birthtimeMs:"Float",
		sourceInstanceName:"String",
		absolutePath:"String",
		relativePath:"String",
		extension:"String",
		size:"Int",
		prettySize:"String",
		modifiedTime:"Date",
		accessTime:"Date",
		changeTime:"Date",
		birthTime:"Date",
		root:"String",
		dir:"String",
		base:"String",
		ext:"String",
		name:"String",
		relativeDirectory:"String",
		dev:"Int",
		mode:"Int",
		nlink:"Int",
		uid:"Int",
		gid:"Int",
		rdev:"Int",
		blksize:"Int",
		ino:"Int",
		blocks:"Int",
		atimeMs:"Float",
		mtimeMs:"Float",
		ctimeMs:"Float",
		atime:"Date",
		mtime:"Date",
		ctime:"Date",
		publicURL:"String",
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		childMdx:"Mdx",
		childImageSharp:"ImageSharp",
		childrenAuthorsYaml:"AuthorsYaml"
	},
	Mdx:{
		rawBody:"String",
		fileAbsolutePath:"String",
		frontmatter:"MdxFrontmatter",
		body:"String",
		excerpt:"String",
		headings:"MdxHeadingMdx",
		html:"String",
		mdxAST:"JSON",
		tableOfContents:"JSON",
		timeToRead:"Int",
		wordCount:"MdxWordCount",
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal"
	},
	MdxFrontmatter:{
		title:"String",
		author:"AuthorsYaml",
		date:"Date",
		hero:"File",
		excerpt:"String"
	},
	AuthorsYaml:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		name:"String",
		bio:"String",
		avatar:"File",
		featured:"Boolean",
		social:"AuthorsYamlSocial"
	},
	AuthorsYamlSocial:{
		name:"String",
		url:"String"
	},
	MdxHeadingMdx:{
		value:"String",
		depth:"Int"
	},
	MdxWordCount:{
		paragraphs:"Int",
		sentences:"Int",
		words:"Int"
	},
	FileConnection:{
		totalCount:"Int",
		edges:"FileEdge",
		nodes:"File",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"FileGroupConnection"
	},
	FileEdge:{
		next:"File",
		node:"File",
		previous:"File"
	},
	FileGroupConnection:{
		totalCount:"Int",
		edges:"FileEdge",
		nodes:"File",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	MdxConnection:{
		totalCount:"Int",
		edges:"MdxEdge",
		nodes:"Mdx",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"MdxGroupConnection"
	},
	MdxEdge:{
		next:"Mdx",
		node:"Mdx",
		previous:"Mdx"
	},
	MdxGroupConnection:{
		totalCount:"Int",
		edges:"MdxEdge",
		nodes:"Mdx",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	Article:{
		id:"ID",
		slug:"String",
		title:"String",
		date:"Date",
		author:"String",
		excerpt:"String",
		body:"String",
		hero:"File",
		timeToRead:"Int",
		parent:"Node",
		children:"Node",
		internal:"Internal"
	},
	ArticleConnection:{
		totalCount:"Int",
		edges:"ArticleEdge",
		nodes:"Article",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"ArticleGroupConnection"
	},
	ArticleEdge:{
		next:"Article",
		node:"Article",
		previous:"Article"
	},
	ArticleGroupConnection:{
		totalCount:"Int",
		edges:"ArticleEdge",
		nodes:"Article",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	MarkdownRemark:{
		id:"ID",
		html:"String",
		htmlAst:"JSON",
		excerpt:"String",
		excerptAst:"JSON",
		headings:"MarkdownHeading",
		timeToRead:"Int",
		tableOfContents:"String",
		wordCount:"MarkdownWordCount",
		parent:"Node",
		children:"Node",
		internal:"Internal"
	},
	MarkdownHeading:{
		value:"String",
		depth:"Int"
	},
	MarkdownWordCount:{
		paragraphs:"Int",
		sentences:"Int",
		words:"Int"
	},
	MarkdownRemarkConnection:{
		totalCount:"Int",
		edges:"MarkdownRemarkEdge",
		nodes:"MarkdownRemark",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"MarkdownRemarkGroupConnection"
	},
	MarkdownRemarkEdge:{
		next:"MarkdownRemark",
		node:"MarkdownRemark",
		previous:"MarkdownRemark"
	},
	MarkdownRemarkGroupConnection:{
		totalCount:"Int",
		edges:"MarkdownRemarkEdge",
		nodes:"MarkdownRemark",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	SitePage:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		path:"String",
		internalComponentName:"String",
		component:"String",
		componentChunkName:"String",
		isCreatedByStatefulCreatePages:"Boolean",
		context:"SitePageContext",
		pluginCreator:"SitePlugin",
		pluginCreatorId:"String",
		componentPath:"String"
	},
	SitePageContext:{
		basePath:"String",
		skip:"Int",
		limit:"Int",
		group:"SitePageContextGroup",
		pathPrefix:"String",
		first:"Boolean",
		last:"Boolean",
		index:"Int",
		pageCount:"Int",
		additionalContext:"SitePageContextAdditionalContext",
		article:"SitePageContextArticle",
		authors:"SitePageContextAuthors",
		slug:"String",
		id:"String",
		title:"String",
		author:"SitePageContextAuthor",
		originalPath:"String"
	},
	SitePageContextGroup:{
		node:"SitePageContextGroupNode"
	},
	SitePageContextGroupNode:{
		id:"String",
		slug:"String",
		title:"String",
		author:"String",
		date:"String",
		dateForSEO:"Date",
		timeToRead:"Int",
		excerpt:"String",
		body:"String",
		hero:"SitePageContextGroupNodeHero"
	},
	SitePageContextGroupNodeHero:{
		full:"SitePageContextGroupNodeHeroFull",
		regular:"SitePageContextGroupNodeHeroRegular",
		narrow:"SitePageContextGroupNodeHeroNarrow",
		seo:"SitePageContextGroupNodeHeroSeo"
	},
	SitePageContextGroupNodeHeroFull:{
		fluid:"SitePageContextGroupNodeHeroFullFluid"
	},
	SitePageContextGroupNodeHeroFullFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextGroupNodeHeroRegular:{
		fluid:"SitePageContextGroupNodeHeroRegularFluid"
	},
	SitePageContextGroupNodeHeroRegularFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextGroupNodeHeroNarrow:{
		fluid:"SitePageContextGroupNodeHeroNarrowFluid"
	},
	SitePageContextGroupNodeHeroNarrowFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextGroupNodeHeroSeo:{
		fixed:"SitePageContextGroupNodeHeroSeoFixed"
	},
	SitePageContextGroupNodeHeroSeoFixed:{
		src:"String"
	},
	SitePageContextAdditionalContext:{
		basePath:"String",
		skip:"Int",
		limit:"Int",
		author:"SitePageContextAdditionalContextAuthor",
		originalPath:"String"
	},
	SitePageContextAdditionalContextAuthor:{
		authorsPage:"Boolean",
		bio:"String",
		id:"String",
		name:"String",
		social:"SitePageContextAdditionalContextAuthorSocial",
		slug:"String",
		avatar:"SitePageContextAdditionalContextAuthorAvatar"
	},
	SitePageContextAdditionalContextAuthorSocial:{
		name:"String",
		url:"String"
	},
	SitePageContextAdditionalContextAuthorAvatar:{
		small:"SitePageContextAdditionalContextAuthorAvatarSmall",
		medium:"SitePageContextAdditionalContextAuthorAvatarMedium",
		large:"SitePageContextAdditionalContextAuthorAvatarLarge"
	},
	SitePageContextAdditionalContextAuthorAvatarSmall:{
		fluid:"SitePageContextAdditionalContextAuthorAvatarSmallFluid"
	},
	SitePageContextAdditionalContextAuthorAvatarSmallFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAdditionalContextAuthorAvatarMedium:{
		fluid:"SitePageContextAdditionalContextAuthorAvatarMediumFluid"
	},
	SitePageContextAdditionalContextAuthorAvatarMediumFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAdditionalContextAuthorAvatarLarge:{
		fluid:"SitePageContextAdditionalContextAuthorAvatarLargeFluid"
	},
	SitePageContextAdditionalContextAuthorAvatarLargeFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextArticle:{
		id:"String",
		slug:"String",
		title:"String",
		author:"String",
		date:"String",
		dateForSEO:"Date",
		timeToRead:"Int",
		excerpt:"String",
		body:"String",
		hero:"SitePageContextArticleHero"
	},
	SitePageContextArticleHero:{
		full:"SitePageContextArticleHeroFull",
		regular:"SitePageContextArticleHeroRegular",
		narrow:"SitePageContextArticleHeroNarrow",
		seo:"SitePageContextArticleHeroSeo"
	},
	SitePageContextArticleHeroFull:{
		fluid:"SitePageContextArticleHeroFullFluid"
	},
	SitePageContextArticleHeroFullFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextArticleHeroRegular:{
		fluid:"SitePageContextArticleHeroRegularFluid"
	},
	SitePageContextArticleHeroRegularFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextArticleHeroNarrow:{
		fluid:"SitePageContextArticleHeroNarrowFluid"
	},
	SitePageContextArticleHeroNarrowFluid:{
		base64:"String",
		aspectRatio:"Float",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextArticleHeroSeo:{
		fixed:"SitePageContextArticleHeroSeoFixed"
	},
	SitePageContextArticleHeroSeoFixed:{
		src:"String"
	},
	SitePageContextAuthors:{
		node:"SitePageContextAuthorsNode"
	},
	SitePageContextAuthorsNode:{
		authorsPage:"Boolean",
		bio:"String",
		id:"String",
		name:"String",
		social:"SitePageContextAuthorsNodeSocial",
		slug:"String",
		avatar:"SitePageContextAuthorsNodeAvatar"
	},
	SitePageContextAuthorsNodeSocial:{
		name:"String",
		url:"String"
	},
	SitePageContextAuthorsNodeAvatar:{
		small:"SitePageContextAuthorsNodeAvatarSmall",
		medium:"SitePageContextAuthorsNodeAvatarMedium",
		large:"SitePageContextAuthorsNodeAvatarLarge"
	},
	SitePageContextAuthorsNodeAvatarSmall:{
		fluid:"SitePageContextAuthorsNodeAvatarSmallFluid"
	},
	SitePageContextAuthorsNodeAvatarSmallFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAuthorsNodeAvatarMedium:{
		fluid:"SitePageContextAuthorsNodeAvatarMediumFluid"
	},
	SitePageContextAuthorsNodeAvatarMediumFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAuthorsNodeAvatarLarge:{
		fluid:"SitePageContextAuthorsNodeAvatarLargeFluid"
	},
	SitePageContextAuthorsNodeAvatarLargeFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAuthor:{
		authorsPage:"Boolean",
		bio:"String",
		id:"String",
		name:"String",
		social:"SitePageContextAuthorSocial",
		slug:"String",
		avatar:"SitePageContextAuthorAvatar"
	},
	SitePageContextAuthorSocial:{
		name:"String",
		url:"String"
	},
	SitePageContextAuthorAvatar:{
		small:"SitePageContextAuthorAvatarSmall",
		medium:"SitePageContextAuthorAvatarMedium",
		large:"SitePageContextAuthorAvatarLarge"
	},
	SitePageContextAuthorAvatarSmall:{
		fluid:"SitePageContextAuthorAvatarSmallFluid"
	},
	SitePageContextAuthorAvatarSmallFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAuthorAvatarMedium:{
		fluid:"SitePageContextAuthorAvatarMediumFluid"
	},
	SitePageContextAuthorAvatarMediumFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePageContextAuthorAvatarLarge:{
		fluid:"SitePageContextAuthorAvatarLargeFluid"
	},
	SitePageContextAuthorAvatarLargeFluid:{
		base64:"String",
		aspectRatio:"Int",
		src:"String",
		srcSet:"String",
		srcWebp:"String",
		srcSetWebp:"String",
		sizes:"String"
	},
	SitePlugin:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		resolve:"String",
		name:"String",
		version:"String",
		pluginOptions:"SitePluginPluginOptions",
		nodeAPIs:"String",
		browserAPIs:"String",
		ssrAPIs:"String",
		pluginFilepath:"String",
		packageJson:"SitePluginPackageJson"
	},
	SitePluginPluginOptions:{
		path:"String",
		name:"String",
		extensions:"String",
		gatsbyRemarkPlugins:"SitePluginPluginOptionsGatsbyRemarkPlugins",
		displayName:"Boolean",
		contentPosts:"String",
		contentAuthors:"String",
		authorsPage:"Boolean",
		basePath:"String",
		short_name:"String",
		start_url:"String",
		background_color:"String",
		theme_color:"String",
		display:"String",
		icon:"String",
		pathCheck:"Boolean"
	},
	SitePluginPluginOptionsGatsbyRemarkPlugins:{
		resolve:"String",
		options:"SitePluginPluginOptionsGatsbyRemarkPluginsOptions"
	},
	SitePluginPluginOptionsGatsbyRemarkPluginsOptions:{
		maxWidth:"Int",
		linkImagesToOriginal:"Boolean",
		quality:"Int",
		withWebp:"Boolean",
		pathPrefix:"String",
		wrapperStyle:"String",
		backgroundColor:"String",
		showCaptions:"Boolean",
		tracedSVG:"Boolean",
		loading:"String"
	},
	SitePluginPackageJson:{
		name:"String",
		description:"String",
		version:"String",
		main:"String",
		license:"String",
		dependencies:"SitePluginPackageJsonDependencies",
		devDependencies:"SitePluginPackageJsonDevDependencies",
		peerDependencies:"SitePluginPackageJsonPeerDependencies",
		keywords:"String"
	},
	SitePluginPackageJsonDependencies:{
		name:"String",
		version:"String"
	},
	SitePluginPackageJsonDevDependencies:{
		name:"String",
		version:"String"
	},
	SitePluginPackageJsonPeerDependencies:{
		name:"String",
		version:"String"
	},
	SitePageConnection:{
		totalCount:"Int",
		edges:"SitePageEdge",
		nodes:"SitePage",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"SitePageGroupConnection"
	},
	SitePageEdge:{
		next:"SitePage",
		node:"SitePage",
		previous:"SitePage"
	},
	SitePageGroupConnection:{
		totalCount:"Int",
		edges:"SitePageEdge",
		nodes:"SitePage",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	SitePluginConnection:{
		totalCount:"Int",
		edges:"SitePluginEdge",
		nodes:"SitePlugin",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"SitePluginGroupConnection"
	},
	SitePluginEdge:{
		next:"SitePlugin",
		node:"SitePlugin",
		previous:"SitePlugin"
	},
	SitePluginGroupConnection:{
		totalCount:"Int",
		edges:"SitePluginEdge",
		nodes:"SitePlugin",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	Site:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		siteMetadata:"SiteSiteMetadata",
		port:"Int",
		host:"String",
		mapping:"SiteMapping",
		polyfill:"Boolean",
		pathPrefix:"String",
		buildTime:"Date"
	},
	SiteSiteMetadata:{
		title:"String",
		name:"String",
		siteUrl:"String",
		description:"String",
		hero:"SiteSiteMetadataHero",
		social:"SiteSiteMetadataSocial"
	},
	SiteSiteMetadataHero:{
		heading:"String",
		maxWidth:"Int"
	},
	SiteSiteMetadataSocial:{
		name:"String",
		url:"String"
	},
	SiteMapping:{
		Mdx_frontmatter_author:"String"
	},
	SiteConnection:{
		totalCount:"Int",
		edges:"SiteEdge",
		nodes:"Site",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"SiteGroupConnection"
	},
	SiteEdge:{
		next:"Site",
		node:"Site",
		previous:"Site"
	},
	SiteGroupConnection:{
		totalCount:"Int",
		edges:"SiteEdge",
		nodes:"Site",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	Directory:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		sourceInstanceName:"String",
		absolutePath:"String",
		relativePath:"String",
		extension:"String",
		size:"Int",
		prettySize:"String",
		modifiedTime:"Date",
		accessTime:"Date",
		changeTime:"Date",
		birthTime:"Date",
		root:"String",
		dir:"String",
		base:"String",
		ext:"String",
		name:"String",
		relativeDirectory:"String",
		dev:"Int",
		mode:"Int",
		nlink:"Int",
		uid:"Int",
		gid:"Int",
		rdev:"Int",
		blksize:"Int",
		ino:"Int",
		blocks:"Int",
		atimeMs:"Float",
		mtimeMs:"Float",
		ctimeMs:"Float",
		birthtimeMs:"Float",
		atime:"Date",
		mtime:"Date",
		ctime:"Date",
		birthtime:"Date"
	},
	DirectoryConnection:{
		totalCount:"Int",
		edges:"DirectoryEdge",
		nodes:"Directory",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"DirectoryGroupConnection"
	},
	DirectoryEdge:{
		next:"Directory",
		node:"Directory",
		previous:"Directory"
	},
	DirectoryGroupConnection:{
		totalCount:"Int",
		edges:"DirectoryEdge",
		nodes:"Directory",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	AuthorsYamlConnection:{
		totalCount:"Int",
		edges:"AuthorsYamlEdge",
		nodes:"AuthorsYaml",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"AuthorsYamlGroupConnection"
	},
	AuthorsYamlEdge:{
		next:"AuthorsYaml",
		node:"AuthorsYaml",
		previous:"AuthorsYaml"
	},
	AuthorsYamlGroupConnection:{
		totalCount:"Int",
		edges:"AuthorsYamlEdge",
		nodes:"AuthorsYaml",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	},
	Author:{
		id:"ID",
		parent:"Node",
		children:"Node",
		internal:"Internal",
		name:"String",
		bio:"String",
		avatar:"File",
		featured:"Boolean",
		social:"AuthorSocial",
		authorsPage:"Boolean",
		slug:"String"
	},
	AuthorSocial:{
		name:"String",
		url:"String"
	},
	AuthorConnection:{
		totalCount:"Int",
		edges:"AuthorEdge",
		nodes:"Author",
		pageInfo:"PageInfo",
		distinct:"String",
		group:"AuthorGroupConnection"
	},
	AuthorEdge:{
		next:"Author",
		node:"Author",
		previous:"Author"
	},
	AuthorGroupConnection:{
		totalCount:"Int",
		edges:"AuthorEdge",
		nodes:"Author",
		pageInfo:"PageInfo",
		field:"String",
		fieldValue:"String"
	}
}

export type ValueTypes = {
    ["Query"]: {
	imageSharp:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	fixed?:ValueTypes["ImageSharpFixedFilterInput"],	resolutions?:ValueTypes["ImageSharpResolutionsFilterInput"],	fluid?:ValueTypes["ImageSharpFluidFilterInput"],	sizes?:ValueTypes["ImageSharpSizesFilterInput"],	original?:ValueTypes["ImageSharpOriginalFilterInput"],	resize?:ValueTypes["ImageSharpResizeFilterInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"]}) => ValueTypes["ImageSharp"],
	allImageSharp:(props:{	filter?:ValueTypes["ImageSharpFilterInput"],	sort?:ValueTypes["ImageSharpSortInput"],	skip?:number,	limit?:number}) => ValueTypes["ImageSharpConnection"],
	file:(props:{	birthtime?:ValueTypes["DateQueryOperatorInput"],	birthtimeMs?:ValueTypes["FloatQueryOperatorInput"],	sourceInstanceName?:ValueTypes["StringQueryOperatorInput"],	absolutePath?:ValueTypes["StringQueryOperatorInput"],	relativePath?:ValueTypes["StringQueryOperatorInput"],	extension?:ValueTypes["StringQueryOperatorInput"],	size?:ValueTypes["IntQueryOperatorInput"],	prettySize?:ValueTypes["StringQueryOperatorInput"],	modifiedTime?:ValueTypes["DateQueryOperatorInput"],	accessTime?:ValueTypes["DateQueryOperatorInput"],	changeTime?:ValueTypes["DateQueryOperatorInput"],	birthTime?:ValueTypes["DateQueryOperatorInput"],	root?:ValueTypes["StringQueryOperatorInput"],	dir?:ValueTypes["StringQueryOperatorInput"],	base?:ValueTypes["StringQueryOperatorInput"],	ext?:ValueTypes["StringQueryOperatorInput"],	name?:ValueTypes["StringQueryOperatorInput"],	relativeDirectory?:ValueTypes["StringQueryOperatorInput"],	dev?:ValueTypes["IntQueryOperatorInput"],	mode?:ValueTypes["IntQueryOperatorInput"],	nlink?:ValueTypes["IntQueryOperatorInput"],	uid?:ValueTypes["IntQueryOperatorInput"],	gid?:ValueTypes["IntQueryOperatorInput"],	rdev?:ValueTypes["IntQueryOperatorInput"],	blksize?:ValueTypes["IntQueryOperatorInput"],	ino?:ValueTypes["IntQueryOperatorInput"],	blocks?:ValueTypes["IntQueryOperatorInput"],	atimeMs?:ValueTypes["FloatQueryOperatorInput"],	mtimeMs?:ValueTypes["FloatQueryOperatorInput"],	ctimeMs?:ValueTypes["FloatQueryOperatorInput"],	atime?:ValueTypes["DateQueryOperatorInput"],	mtime?:ValueTypes["DateQueryOperatorInput"],	ctime?:ValueTypes["DateQueryOperatorInput"],	publicURL?:ValueTypes["StringQueryOperatorInput"],	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	childMdx?:ValueTypes["MdxFilterInput"],	childImageSharp?:ValueTypes["ImageSharpFilterInput"],	childrenAuthorsYaml?:ValueTypes["AuthorsYamlFilterListInput"]}) => ValueTypes["File"],
	allFile:(props:{	filter?:ValueTypes["FileFilterInput"],	sort?:ValueTypes["FileSortInput"],	skip?:number,	limit?:number}) => ValueTypes["FileConnection"],
	mdx:(props:{	rawBody?:ValueTypes["StringQueryOperatorInput"],	fileAbsolutePath?:ValueTypes["StringQueryOperatorInput"],	frontmatter?:ValueTypes["MdxFrontmatterFilterInput"],	body?:ValueTypes["StringQueryOperatorInput"],	excerpt?:ValueTypes["StringQueryOperatorInput"],	headings?:ValueTypes["MdxHeadingMdxFilterListInput"],	html?:ValueTypes["StringQueryOperatorInput"],	mdxAST?:ValueTypes["JSONQueryOperatorInput"],	tableOfContents?:ValueTypes["JSONQueryOperatorInput"],	timeToRead?:ValueTypes["IntQueryOperatorInput"],	wordCount?:ValueTypes["MdxWordCountFilterInput"],	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"]}) => ValueTypes["Mdx"],
	allMdx:(props:{	filter?:ValueTypes["MdxFilterInput"],	sort?:ValueTypes["MdxSortInput"],	skip?:number,	limit?:number}) => ValueTypes["MdxConnection"],
	article:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	slug?:ValueTypes["StringQueryOperatorInput"],	title?:ValueTypes["StringQueryOperatorInput"],	date?:ValueTypes["DateQueryOperatorInput"],	author?:ValueTypes["StringQueryOperatorInput"],	excerpt?:ValueTypes["StringQueryOperatorInput"],	body?:ValueTypes["StringQueryOperatorInput"],	hero?:ValueTypes["FileFilterInput"],	timeToRead?:ValueTypes["IntQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"]}) => ValueTypes["Article"],
	allArticle:(props:{	filter?:ValueTypes["ArticleFilterInput"],	sort?:ValueTypes["ArticleSortInput"],	skip?:number,	limit?:number}) => ValueTypes["ArticleConnection"],
	markdownRemark:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	html?:ValueTypes["StringQueryOperatorInput"],	htmlAst?:ValueTypes["JSONQueryOperatorInput"],	excerpt?:ValueTypes["StringQueryOperatorInput"],	excerptAst?:ValueTypes["JSONQueryOperatorInput"],	headings?:ValueTypes["MarkdownHeadingFilterListInput"],	timeToRead?:ValueTypes["IntQueryOperatorInput"],	tableOfContents?:ValueTypes["StringQueryOperatorInput"],	wordCount?:ValueTypes["MarkdownWordCountFilterInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"]}) => ValueTypes["MarkdownRemark"],
	allMarkdownRemark:(props:{	filter?:ValueTypes["MarkdownRemarkFilterInput"],	sort?:ValueTypes["MarkdownRemarkSortInput"],	skip?:number,	limit?:number}) => ValueTypes["MarkdownRemarkConnection"],
	sitePage:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	path?:ValueTypes["StringQueryOperatorInput"],	internalComponentName?:ValueTypes["StringQueryOperatorInput"],	component?:ValueTypes["StringQueryOperatorInput"],	componentChunkName?:ValueTypes["StringQueryOperatorInput"],	isCreatedByStatefulCreatePages?:ValueTypes["BooleanQueryOperatorInput"],	context?:ValueTypes["SitePageContextFilterInput"],	pluginCreator?:ValueTypes["SitePluginFilterInput"],	pluginCreatorId?:ValueTypes["StringQueryOperatorInput"],	componentPath?:ValueTypes["StringQueryOperatorInput"]}) => ValueTypes["SitePage"],
	allSitePage:(props:{	filter?:ValueTypes["SitePageFilterInput"],	sort?:ValueTypes["SitePageSortInput"],	skip?:number,	limit?:number}) => ValueTypes["SitePageConnection"],
	sitePlugin:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	resolve?:ValueTypes["StringQueryOperatorInput"],	name?:ValueTypes["StringQueryOperatorInput"],	version?:ValueTypes["StringQueryOperatorInput"],	pluginOptions?:ValueTypes["SitePluginPluginOptionsFilterInput"],	nodeAPIs?:ValueTypes["StringQueryOperatorInput"],	browserAPIs?:ValueTypes["StringQueryOperatorInput"],	ssrAPIs?:ValueTypes["StringQueryOperatorInput"],	pluginFilepath?:ValueTypes["StringQueryOperatorInput"],	packageJson?:ValueTypes["SitePluginPackageJsonFilterInput"]}) => ValueTypes["SitePlugin"],
	allSitePlugin:(props:{	filter?:ValueTypes["SitePluginFilterInput"],	sort?:ValueTypes["SitePluginSortInput"],	skip?:number,	limit?:number}) => ValueTypes["SitePluginConnection"],
	site:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	siteMetadata?:ValueTypes["SiteSiteMetadataFilterInput"],	port?:ValueTypes["IntQueryOperatorInput"],	host?:ValueTypes["StringQueryOperatorInput"],	mapping?:ValueTypes["SiteMappingFilterInput"],	polyfill?:ValueTypes["BooleanQueryOperatorInput"],	pathPrefix?:ValueTypes["StringQueryOperatorInput"],	buildTime?:ValueTypes["DateQueryOperatorInput"]}) => ValueTypes["Site"],
	allSite:(props:{	filter?:ValueTypes["SiteFilterInput"],	sort?:ValueTypes["SiteSortInput"],	skip?:number,	limit?:number}) => ValueTypes["SiteConnection"],
	directory:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	sourceInstanceName?:ValueTypes["StringQueryOperatorInput"],	absolutePath?:ValueTypes["StringQueryOperatorInput"],	relativePath?:ValueTypes["StringQueryOperatorInput"],	extension?:ValueTypes["StringQueryOperatorInput"],	size?:ValueTypes["IntQueryOperatorInput"],	prettySize?:ValueTypes["StringQueryOperatorInput"],	modifiedTime?:ValueTypes["DateQueryOperatorInput"],	accessTime?:ValueTypes["DateQueryOperatorInput"],	changeTime?:ValueTypes["DateQueryOperatorInput"],	birthTime?:ValueTypes["DateQueryOperatorInput"],	root?:ValueTypes["StringQueryOperatorInput"],	dir?:ValueTypes["StringQueryOperatorInput"],	base?:ValueTypes["StringQueryOperatorInput"],	ext?:ValueTypes["StringQueryOperatorInput"],	name?:ValueTypes["StringQueryOperatorInput"],	relativeDirectory?:ValueTypes["StringQueryOperatorInput"],	dev?:ValueTypes["IntQueryOperatorInput"],	mode?:ValueTypes["IntQueryOperatorInput"],	nlink?:ValueTypes["IntQueryOperatorInput"],	uid?:ValueTypes["IntQueryOperatorInput"],	gid?:ValueTypes["IntQueryOperatorInput"],	rdev?:ValueTypes["IntQueryOperatorInput"],	blksize?:ValueTypes["IntQueryOperatorInput"],	ino?:ValueTypes["IntQueryOperatorInput"],	blocks?:ValueTypes["IntQueryOperatorInput"],	atimeMs?:ValueTypes["FloatQueryOperatorInput"],	mtimeMs?:ValueTypes["FloatQueryOperatorInput"],	ctimeMs?:ValueTypes["FloatQueryOperatorInput"],	birthtimeMs?:ValueTypes["FloatQueryOperatorInput"],	atime?:ValueTypes["DateQueryOperatorInput"],	mtime?:ValueTypes["DateQueryOperatorInput"],	ctime?:ValueTypes["DateQueryOperatorInput"],	birthtime?:ValueTypes["DateQueryOperatorInput"]}) => ValueTypes["Directory"],
	allDirectory:(props:{	filter?:ValueTypes["DirectoryFilterInput"],	sort?:ValueTypes["DirectorySortInput"],	skip?:number,	limit?:number}) => ValueTypes["DirectoryConnection"],
	authorsYaml:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	name?:ValueTypes["StringQueryOperatorInput"],	bio?:ValueTypes["StringQueryOperatorInput"],	avatar?:ValueTypes["FileFilterInput"],	featured?:ValueTypes["BooleanQueryOperatorInput"],	social?:ValueTypes["AuthorsYamlSocialFilterListInput"]}) => ValueTypes["AuthorsYaml"],
	allAuthorsYaml:(props:{	filter?:ValueTypes["AuthorsYamlFilterInput"],	sort?:ValueTypes["AuthorsYamlSortInput"],	skip?:number,	limit?:number}) => ValueTypes["AuthorsYamlConnection"],
	author:(props:{	id?:ValueTypes["StringQueryOperatorInput"],	parent?:ValueTypes["NodeFilterInput"],	children?:ValueTypes["NodeFilterListInput"],	internal?:ValueTypes["InternalFilterInput"],	name?:ValueTypes["StringQueryOperatorInput"],	bio?:ValueTypes["StringQueryOperatorInput"],	avatar?:ValueTypes["FileFilterInput"],	featured?:ValueTypes["BooleanQueryOperatorInput"],	social?:ValueTypes["AuthorSocialFilterListInput"],	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],	slug?:ValueTypes["StringQueryOperatorInput"]}) => ValueTypes["Author"],
	allAuthor:(props:{	filter?:ValueTypes["AuthorFilterInput"],	sort?:ValueTypes["AuthorSortInput"],	skip?:number,	limit?:number}) => ValueTypes["AuthorConnection"]
},
	["StringQueryOperatorInput"]: {
	eq?:string,
	ne?:string,
	in?:(string | undefined)[],
	nin?:(string | undefined)[],
	regex?:string,
	glob?:string
},
	["ImageSharpFixedFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	tracedSVG?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	width?:ValueTypes["FloatQueryOperatorInput"],
	height?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	originalName?:ValueTypes["StringQueryOperatorInput"]
},
	["FloatQueryOperatorInput"]: {
	eq?:number,
	ne?:number,
	gt?:number,
	gte?:number,
	lt?:number,
	lte?:number,
	in?:(number | undefined)[],
	nin?:(number | undefined)[]
},
	["ImageSharpResolutionsFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	tracedSVG?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	width?:ValueTypes["FloatQueryOperatorInput"],
	height?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	originalName?:ValueTypes["StringQueryOperatorInput"]
},
	["ImageSharpFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	tracedSVG?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"],
	originalImg?:ValueTypes["StringQueryOperatorInput"],
	originalName?:ValueTypes["StringQueryOperatorInput"],
	presentationWidth?:ValueTypes["IntQueryOperatorInput"],
	presentationHeight?:ValueTypes["IntQueryOperatorInput"]
},
	["IntQueryOperatorInput"]: {
	eq?:number,
	ne?:number,
	gt?:number,
	gte?:number,
	lt?:number,
	lte?:number,
	in?:(number | undefined)[],
	nin?:(number | undefined)[]
},
	["ImageSharpSizesFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	tracedSVG?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"],
	originalImg?:ValueTypes["StringQueryOperatorInput"],
	originalName?:ValueTypes["StringQueryOperatorInput"],
	presentationWidth?:ValueTypes["IntQueryOperatorInput"],
	presentationHeight?:ValueTypes["IntQueryOperatorInput"]
},
	["ImageSharpOriginalFilterInput"]: {
	width?:ValueTypes["FloatQueryOperatorInput"],
	height?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"]
},
	["ImageSharpResizeFilterInput"]: {
	src?:ValueTypes["StringQueryOperatorInput"],
	tracedSVG?:ValueTypes["StringQueryOperatorInput"],
	width?:ValueTypes["IntQueryOperatorInput"],
	height?:ValueTypes["IntQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	originalName?:ValueTypes["StringQueryOperatorInput"]
},
	["NodeFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"]
},
	["NodeFilterListInput"]: {
	elemMatch?:ValueTypes["NodeFilterInput"]
},
	["InternalFilterInput"]: {
	content?:ValueTypes["StringQueryOperatorInput"],
	contentDigest?:ValueTypes["StringQueryOperatorInput"],
	description?:ValueTypes["StringQueryOperatorInput"],
	fieldOwners?:ValueTypes["StringQueryOperatorInput"],
	ignoreType?:ValueTypes["BooleanQueryOperatorInput"],
	mediaType?:ValueTypes["StringQueryOperatorInput"],
	owner?:ValueTypes["StringQueryOperatorInput"],
	type?:ValueTypes["StringQueryOperatorInput"]
},
	["BooleanQueryOperatorInput"]: {
	eq?:boolean,
	ne?:boolean,
	in?:(boolean | undefined)[],
	nin?:(boolean | undefined)[]
},
	["ImageSharp"]: {
	id:string,
	fixed:(props:{	width?:number,	height?:number,	base64Width?:number,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:ValueTypes["DuotoneGradient"],	traceSVG?:ValueTypes["Potrace"],	quality?:number,	toFormat?:ValueTypes["ImageFormat"],	toFormatBase64?:ValueTypes["ImageFormat"],	cropFocus?:ValueTypes["ImageCropFocus"],	fit?:ValueTypes["ImageFit"],	background?:string,	rotate?:number,	trim?:number}) => ValueTypes["ImageSharpFixed"],
	resolutions:(props:{	width?:number,	height?:number,	base64Width?:number,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:ValueTypes["DuotoneGradient"],	traceSVG?:ValueTypes["Potrace"],	quality?:number,	toFormat?:ValueTypes["ImageFormat"],	toFormatBase64?:ValueTypes["ImageFormat"],	cropFocus?:ValueTypes["ImageCropFocus"],	fit?:ValueTypes["ImageFit"],	background?:string,	rotate?:number,	trim?:number}) => ValueTypes["ImageSharpResolutions"],
	fluid:(props:{	maxWidth?:number,	maxHeight?:number,	base64Width?:number,	grayscale?:boolean,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	duotone?:ValueTypes["DuotoneGradient"],	traceSVG?:ValueTypes["Potrace"],	quality?:number,	toFormat?:ValueTypes["ImageFormat"],	toFormatBase64?:ValueTypes["ImageFormat"],	cropFocus?:ValueTypes["ImageCropFocus"],	fit?:ValueTypes["ImageFit"],	background?:string,	rotate?:number,	trim?:number,	sizes?:string,	/** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
	srcSetBreakpoints?:(number | undefined)[]}) => ValueTypes["ImageSharpFluid"],
	sizes:(props:{	maxWidth?:number,	maxHeight?:number,	base64Width?:number,	grayscale?:boolean,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	duotone?:ValueTypes["DuotoneGradient"],	traceSVG?:ValueTypes["Potrace"],	quality?:number,	toFormat?:ValueTypes["ImageFormat"],	toFormatBase64?:ValueTypes["ImageFormat"],	cropFocus?:ValueTypes["ImageCropFocus"],	fit?:ValueTypes["ImageFit"],	background?:string,	rotate?:number,	trim?:number,	sizes?:string,	/** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
	srcSetBreakpoints?:(number | undefined)[]}) => ValueTypes["ImageSharpSizes"],
	original?:ValueTypes["ImageSharpOriginal"],
	resize:(props:{	width?:number,	height?:number,	quality?:number,	jpegProgressive?:boolean,	pngCompressionLevel?:number,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:ValueTypes["DuotoneGradient"],	base64?:boolean,	traceSVG?:ValueTypes["Potrace"],	toFormat?:ValueTypes["ImageFormat"],	cropFocus?:ValueTypes["ImageCropFocus"],	fit?:ValueTypes["ImageFit"],	background?:string,	rotate?:number,	trim?:number}) => ValueTypes["ImageSharpResize"],
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"]
},
	/** Node Interface */
["Node"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"]
},
	["Internal"]: {
	content?:string,
	contentDigest:string,
	description?:string,
	fieldOwners?:(string | undefined)[],
	ignoreType?:boolean,
	mediaType?:string,
	owner:string,
	type:string
},
	["DuotoneGradient"]: {
	highlight:string,
	shadow:string,
	opacity?:number
},
	["Potrace"]: {
	turnPolicy?:ValueTypes["PotraceTurnPolicy"],
	turdSize?:number,
	alphaMax?:number,
	optCurve?:boolean,
	optTolerance?:number,
	threshold?:number,
	blackOnWhite?:boolean,
	color?:string,
	background?:string
},
	["PotraceTurnPolicy"]:PotraceTurnPolicy,
	["ImageFormat"]:ImageFormat,
	["ImageCropFocus"]:ImageCropFocus,
	["ImageFit"]:ImageFit,
	["ImageSharpFixed"]: {
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	width?:number,
	height?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	originalName?:string
},
	["ImageSharpResolutions"]: {
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	width?:number,
	height?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	originalName?:string
},
	["ImageSharpFluid"]: {
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string,
	originalImg?:string,
	originalName?:string,
	presentationWidth?:number,
	presentationHeight?:number
},
	["ImageSharpSizes"]: {
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string,
	originalImg?:string,
	originalName?:string,
	presentationWidth?:number,
	presentationHeight?:number
},
	["ImageSharpOriginal"]: {
	width?:number,
	height?:number,
	src?:string
},
	["ImageSharpResize"]: {
	src?:string,
	tracedSVG?:string,
	width?:number,
	height?:number,
	aspectRatio?:number,
	originalName?:string
},
	["ImageSharpFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	fixed?:ValueTypes["ImageSharpFixedFilterInput"],
	resolutions?:ValueTypes["ImageSharpResolutionsFilterInput"],
	fluid?:ValueTypes["ImageSharpFluidFilterInput"],
	sizes?:ValueTypes["ImageSharpSizesFilterInput"],
	original?:ValueTypes["ImageSharpOriginalFilterInput"],
	resize?:ValueTypes["ImageSharpResizeFilterInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"]
},
	["ImageSharpSortInput"]: {
	fields?:(ValueTypes["ImageSharpFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["ImageSharpFieldsEnum"]:ImageSharpFieldsEnum,
	["SortOrderEnum"]:SortOrderEnum,
	["ImageSharpConnection"]: {
	totalCount:number,
	edges:ValueTypes["ImageSharpEdge"][],
	nodes:ValueTypes["ImageSharp"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["ImageSharpFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["ImageSharpFieldsEnum"]}) => ValueTypes["ImageSharpGroupConnection"][]
},
	["ImageSharpEdge"]: {
	next?:ValueTypes["ImageSharp"],
	node:ValueTypes["ImageSharp"],
	previous?:ValueTypes["ImageSharp"]
},
	["PageInfo"]: {
	currentPage:number,
	hasPreviousPage:boolean,
	hasNextPage:boolean,
	itemCount:number,
	pageCount:number,
	perPage?:number
},
	["ImageSharpGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["ImageSharpEdge"][],
	nodes:ValueTypes["ImageSharp"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["DateQueryOperatorInput"]: {
	eq?:ValueTypes["Date"],
	ne?:ValueTypes["Date"],
	gt?:ValueTypes["Date"],
	gte?:ValueTypes["Date"],
	lt?:ValueTypes["Date"],
	lte?:ValueTypes["Date"],
	in?:(ValueTypes["Date"] | undefined)[],
	nin?:(ValueTypes["Date"] | undefined)[]
},
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
representation of dates and times using the Gregorian calendar. */
["Date"]:any,
	["MdxFilterInput"]: {
	rawBody?:ValueTypes["StringQueryOperatorInput"],
	fileAbsolutePath?:ValueTypes["StringQueryOperatorInput"],
	frontmatter?:ValueTypes["MdxFrontmatterFilterInput"],
	body?:ValueTypes["StringQueryOperatorInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"],
	headings?:ValueTypes["MdxHeadingMdxFilterListInput"],
	html?:ValueTypes["StringQueryOperatorInput"],
	mdxAST?:ValueTypes["JSONQueryOperatorInput"],
	tableOfContents?:ValueTypes["JSONQueryOperatorInput"],
	timeToRead?:ValueTypes["IntQueryOperatorInput"],
	wordCount?:ValueTypes["MdxWordCountFilterInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"]
},
	["MdxFrontmatterFilterInput"]: {
	title?:ValueTypes["StringQueryOperatorInput"],
	author?:ValueTypes["AuthorsYamlFilterInput"],
	date?:ValueTypes["DateQueryOperatorInput"],
	hero?:ValueTypes["FileFilterInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"]
},
	["AuthorsYamlFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	bio?:ValueTypes["StringQueryOperatorInput"],
	avatar?:ValueTypes["FileFilterInput"],
	featured?:ValueTypes["BooleanQueryOperatorInput"],
	social?:ValueTypes["AuthorsYamlSocialFilterListInput"]
},
	["FileFilterInput"]: {
	birthtime?:ValueTypes["DateQueryOperatorInput"],
	birthtimeMs?:ValueTypes["FloatQueryOperatorInput"],
	sourceInstanceName?:ValueTypes["StringQueryOperatorInput"],
	absolutePath?:ValueTypes["StringQueryOperatorInput"],
	relativePath?:ValueTypes["StringQueryOperatorInput"],
	extension?:ValueTypes["StringQueryOperatorInput"],
	size?:ValueTypes["IntQueryOperatorInput"],
	prettySize?:ValueTypes["StringQueryOperatorInput"],
	modifiedTime?:ValueTypes["DateQueryOperatorInput"],
	accessTime?:ValueTypes["DateQueryOperatorInput"],
	changeTime?:ValueTypes["DateQueryOperatorInput"],
	birthTime?:ValueTypes["DateQueryOperatorInput"],
	root?:ValueTypes["StringQueryOperatorInput"],
	dir?:ValueTypes["StringQueryOperatorInput"],
	base?:ValueTypes["StringQueryOperatorInput"],
	ext?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	relativeDirectory?:ValueTypes["StringQueryOperatorInput"],
	dev?:ValueTypes["IntQueryOperatorInput"],
	mode?:ValueTypes["IntQueryOperatorInput"],
	nlink?:ValueTypes["IntQueryOperatorInput"],
	uid?:ValueTypes["IntQueryOperatorInput"],
	gid?:ValueTypes["IntQueryOperatorInput"],
	rdev?:ValueTypes["IntQueryOperatorInput"],
	blksize?:ValueTypes["IntQueryOperatorInput"],
	ino?:ValueTypes["IntQueryOperatorInput"],
	blocks?:ValueTypes["IntQueryOperatorInput"],
	atimeMs?:ValueTypes["FloatQueryOperatorInput"],
	mtimeMs?:ValueTypes["FloatQueryOperatorInput"],
	ctimeMs?:ValueTypes["FloatQueryOperatorInput"],
	atime?:ValueTypes["DateQueryOperatorInput"],
	mtime?:ValueTypes["DateQueryOperatorInput"],
	ctime?:ValueTypes["DateQueryOperatorInput"],
	publicURL?:ValueTypes["StringQueryOperatorInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	childMdx?:ValueTypes["MdxFilterInput"],
	childImageSharp?:ValueTypes["ImageSharpFilterInput"],
	childrenAuthorsYaml?:ValueTypes["AuthorsYamlFilterListInput"]
},
	["AuthorsYamlFilterListInput"]: {
	elemMatch?:ValueTypes["AuthorsYamlFilterInput"]
},
	["AuthorsYamlSocialFilterListInput"]: {
	elemMatch?:ValueTypes["AuthorsYamlSocialFilterInput"]
},
	["AuthorsYamlSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["MdxHeadingMdxFilterListInput"]: {
	elemMatch?:ValueTypes["MdxHeadingMdxFilterInput"]
},
	["MdxHeadingMdxFilterInput"]: {
	value?:ValueTypes["StringQueryOperatorInput"],
	depth?:ValueTypes["IntQueryOperatorInput"]
},
	["JSONQueryOperatorInput"]: {
	eq?:ValueTypes["JSON"],
	ne?:ValueTypes["JSON"],
	in?:(ValueTypes["JSON"] | undefined)[],
	nin?:(ValueTypes["JSON"] | undefined)[],
	regex?:ValueTypes["JSON"],
	glob?:ValueTypes["JSON"]
},
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:any,
	["MdxWordCountFilterInput"]: {
	paragraphs?:ValueTypes["IntQueryOperatorInput"],
	sentences?:ValueTypes["IntQueryOperatorInput"],
	words?:ValueTypes["IntQueryOperatorInput"]
},
	["File"]: {
	birthtime?:ValueTypes["Date"],
	birthtimeMs?:number,
	sourceInstanceName?:string,
	absolutePath?:string,
	relativePath?:string,
	extension?:string,
	size?:number,
	prettySize?:string,
	modifiedTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	accessTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	changeTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	birthTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	root?:string,
	dir?:string,
	base?:string,
	ext?:string,
	name?:string,
	relativeDirectory?:string,
	dev?:number,
	mode?:number,
	nlink?:number,
	uid?:number,
	gid?:number,
	rdev?:number,
	blksize?:number,
	ino?:number,
	blocks?:number,
	atimeMs?:number,
	mtimeMs?:number,
	ctimeMs?:number,
	atime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	mtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	ctime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	/** Copy file to static directory and return public url to it */
	publicURL?:string,
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	childMdx?:ValueTypes["Mdx"],
	childImageSharp?:ValueTypes["ImageSharp"],
	childrenAuthorsYaml?:(ValueTypes["AuthorsYaml"] | undefined)[]
},
	["Mdx"]: {
	rawBody:string,
	fileAbsolutePath:string,
	frontmatter?:ValueTypes["MdxFrontmatter"],
	body:string,
	excerpt:(props:{	pruneLength?:number}) => string,
	headings:(props:{	depth?:ValueTypes["HeadingsMdx"]}) => (ValueTypes["MdxHeadingMdx"] | undefined)[],
	html?:string,
	mdxAST?:ValueTypes["JSON"],
	tableOfContents:(props:{	maxDepth?:number}) => ValueTypes["JSON"],
	timeToRead?:number,
	wordCount?:ValueTypes["MdxWordCount"],
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"]
},
	["MdxFrontmatter"]: {
	title:string,
	author?:ValueTypes["AuthorsYaml"],
	date:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	hero?:ValueTypes["File"],
	excerpt?:string
},
	["AuthorsYaml"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	name?:string,
	bio?:string,
	avatar?:ValueTypes["File"],
	featured?:boolean,
	social?:(ValueTypes["AuthorsYamlSocial"] | undefined)[]
},
	["AuthorsYamlSocial"]: {
	name?:string,
	url?:string
},
	["HeadingsMdx"]:HeadingsMdx,
	["MdxHeadingMdx"]: {
	value?:string,
	depth?:number
},
	["MdxWordCount"]: {
	paragraphs?:number,
	sentences?:number,
	words?:number
},
	["FileSortInput"]: {
	fields?:(ValueTypes["FileFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["FileFieldsEnum"]:FileFieldsEnum,
	["FileConnection"]: {
	totalCount:number,
	edges:ValueTypes["FileEdge"][],
	nodes:ValueTypes["File"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["FileFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["FileFieldsEnum"]}) => ValueTypes["FileGroupConnection"][]
},
	["FileEdge"]: {
	next?:ValueTypes["File"],
	node:ValueTypes["File"],
	previous?:ValueTypes["File"]
},
	["FileGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["FileEdge"][],
	nodes:ValueTypes["File"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["MdxSortInput"]: {
	fields?:(ValueTypes["MdxFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["MdxFieldsEnum"]:MdxFieldsEnum,
	["MdxConnection"]: {
	totalCount:number,
	edges:ValueTypes["MdxEdge"][],
	nodes:ValueTypes["Mdx"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["MdxFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["MdxFieldsEnum"]}) => ValueTypes["MdxGroupConnection"][]
},
	["MdxEdge"]: {
	next?:ValueTypes["Mdx"],
	node:ValueTypes["Mdx"],
	previous?:ValueTypes["Mdx"]
},
	["MdxGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["MdxEdge"][],
	nodes:ValueTypes["Mdx"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["Article"]: {
	id:string,
	slug:string,
	title:string,
	date:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	author:string,
	excerpt:(props:{	pruneLength?:number}) => string,
	body:string,
	hero?:ValueTypes["File"],
	timeToRead?:number,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"]
},
	["ArticleFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	title?:ValueTypes["StringQueryOperatorInput"],
	date?:ValueTypes["DateQueryOperatorInput"],
	author?:ValueTypes["StringQueryOperatorInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"],
	body?:ValueTypes["StringQueryOperatorInput"],
	hero?:ValueTypes["FileFilterInput"],
	timeToRead?:ValueTypes["IntQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"]
},
	["ArticleSortInput"]: {
	fields?:(ValueTypes["ArticleFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["ArticleFieldsEnum"]:ArticleFieldsEnum,
	["ArticleConnection"]: {
	totalCount:number,
	edges:ValueTypes["ArticleEdge"][],
	nodes:ValueTypes["Article"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["ArticleFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["ArticleFieldsEnum"]}) => ValueTypes["ArticleGroupConnection"][]
},
	["ArticleEdge"]: {
	next?:ValueTypes["Article"],
	node:ValueTypes["Article"],
	previous?:ValueTypes["Article"]
},
	["ArticleGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["ArticleEdge"][],
	nodes:ValueTypes["Article"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["MarkdownHeadingFilterListInput"]: {
	elemMatch?:ValueTypes["MarkdownHeadingFilterInput"]
},
	["MarkdownHeadingFilterInput"]: {
	value?:ValueTypes["StringQueryOperatorInput"],
	depth?:ValueTypes["IntQueryOperatorInput"]
},
	["MarkdownWordCountFilterInput"]: {
	paragraphs?:ValueTypes["IntQueryOperatorInput"],
	sentences?:ValueTypes["IntQueryOperatorInput"],
	words?:ValueTypes["IntQueryOperatorInput"]
},
	["MarkdownRemark"]: {
	id:string,
	html?:string,
	htmlAst?:ValueTypes["JSON"],
	excerpt:(props:{	pruneLength?:number,	truncate?:boolean,	format?:ValueTypes["MarkdownExcerptFormats"]}) => string,
	excerptAst:(props:{	pruneLength?:number,	truncate?:boolean}) => ValueTypes["JSON"],
	headings:(props:{	depth?:ValueTypes["MarkdownHeadingLevels"]}) => (ValueTypes["MarkdownHeading"] | undefined)[],
	timeToRead?:number,
	tableOfContents:(props:{	pathToSlugField?:string,	maxDepth?:number,	heading?:string}) => string,
	wordCount?:ValueTypes["MarkdownWordCount"],
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"]
},
	["MarkdownExcerptFormats"]:MarkdownExcerptFormats,
	["MarkdownHeadingLevels"]:MarkdownHeadingLevels,
	["MarkdownHeading"]: {
	value?:string,
	depth?:number
},
	["MarkdownWordCount"]: {
	paragraphs?:number,
	sentences?:number,
	words?:number
},
	["MarkdownRemarkFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	html?:ValueTypes["StringQueryOperatorInput"],
	htmlAst?:ValueTypes["JSONQueryOperatorInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"],
	excerptAst?:ValueTypes["JSONQueryOperatorInput"],
	headings?:ValueTypes["MarkdownHeadingFilterListInput"],
	timeToRead?:ValueTypes["IntQueryOperatorInput"],
	tableOfContents?:ValueTypes["StringQueryOperatorInput"],
	wordCount?:ValueTypes["MarkdownWordCountFilterInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"]
},
	["MarkdownRemarkSortInput"]: {
	fields?:(ValueTypes["MarkdownRemarkFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["MarkdownRemarkFieldsEnum"]:MarkdownRemarkFieldsEnum,
	["MarkdownRemarkConnection"]: {
	totalCount:number,
	edges:ValueTypes["MarkdownRemarkEdge"][],
	nodes:ValueTypes["MarkdownRemark"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["MarkdownRemarkFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["MarkdownRemarkFieldsEnum"]}) => ValueTypes["MarkdownRemarkGroupConnection"][]
},
	["MarkdownRemarkEdge"]: {
	next?:ValueTypes["MarkdownRemark"],
	node:ValueTypes["MarkdownRemark"],
	previous?:ValueTypes["MarkdownRemark"]
},
	["MarkdownRemarkGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["MarkdownRemarkEdge"][],
	nodes:ValueTypes["MarkdownRemark"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["SitePageContextFilterInput"]: {
	basePath?:ValueTypes["StringQueryOperatorInput"],
	skip?:ValueTypes["IntQueryOperatorInput"],
	limit?:ValueTypes["IntQueryOperatorInput"],
	group?:ValueTypes["SitePageContextGroupFilterListInput"],
	pathPrefix?:ValueTypes["StringQueryOperatorInput"],
	first?:ValueTypes["BooleanQueryOperatorInput"],
	last?:ValueTypes["BooleanQueryOperatorInput"],
	index?:ValueTypes["IntQueryOperatorInput"],
	pageCount?:ValueTypes["IntQueryOperatorInput"],
	additionalContext?:ValueTypes["SitePageContextAdditionalContextFilterInput"],
	article?:ValueTypes["SitePageContextArticleFilterInput"],
	authors?:ValueTypes["SitePageContextAuthorsFilterListInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	title?:ValueTypes["StringQueryOperatorInput"],
	author?:ValueTypes["SitePageContextAuthorFilterInput"],
	originalPath?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextGroupFilterListInput"]: {
	elemMatch?:ValueTypes["SitePageContextGroupFilterInput"]
},
	["SitePageContextGroupFilterInput"]: {
	node?:ValueTypes["SitePageContextGroupNodeFilterInput"]
},
	["SitePageContextGroupNodeFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	title?:ValueTypes["StringQueryOperatorInput"],
	author?:ValueTypes["StringQueryOperatorInput"],
	date?:ValueTypes["StringQueryOperatorInput"],
	dateForSEO?:ValueTypes["DateQueryOperatorInput"],
	timeToRead?:ValueTypes["IntQueryOperatorInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"],
	body?:ValueTypes["StringQueryOperatorInput"],
	hero?:ValueTypes["SitePageContextGroupNodeHeroFilterInput"]
},
	["SitePageContextGroupNodeHeroFilterInput"]: {
	full?:ValueTypes["SitePageContextGroupNodeHeroFullFilterInput"],
	regular?:ValueTypes["SitePageContextGroupNodeHeroRegularFilterInput"],
	narrow?:ValueTypes["SitePageContextGroupNodeHeroNarrowFilterInput"],
	seo?:ValueTypes["SitePageContextGroupNodeHeroSeoFilterInput"]
},
	["SitePageContextGroupNodeHeroFullFilterInput"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroFullFluidFilterInput"]
},
	["SitePageContextGroupNodeHeroFullFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextGroupNodeHeroRegularFilterInput"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroRegularFluidFilterInput"]
},
	["SitePageContextGroupNodeHeroRegularFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextGroupNodeHeroNarrowFilterInput"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroNarrowFluidFilterInput"]
},
	["SitePageContextGroupNodeHeroNarrowFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextGroupNodeHeroSeoFilterInput"]: {
	fixed?:ValueTypes["SitePageContextGroupNodeHeroSeoFixedFilterInput"]
},
	["SitePageContextGroupNodeHeroSeoFixedFilterInput"]: {
	src?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAdditionalContextFilterInput"]: {
	basePath?:ValueTypes["StringQueryOperatorInput"],
	skip?:ValueTypes["IntQueryOperatorInput"],
	limit?:ValueTypes["IntQueryOperatorInput"],
	author?:ValueTypes["SitePageContextAdditionalContextAuthorFilterInput"],
	originalPath?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAdditionalContextAuthorFilterInput"]: {
	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],
	bio?:ValueTypes["StringQueryOperatorInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	social?:ValueTypes["SitePageContextAdditionalContextAuthorSocialFilterListInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	avatar?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarFilterInput"]
},
	["SitePageContextAdditionalContextAuthorSocialFilterListInput"]: {
	elemMatch?:ValueTypes["SitePageContextAdditionalContextAuthorSocialFilterInput"]
},
	["SitePageContextAdditionalContextAuthorSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarFilterInput"]: {
	small?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarSmallFilterInput"],
	medium?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarMediumFilterInput"],
	large?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarLargeFilterInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarSmallFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarMediumFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarLargeFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput"]
},
	["SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextArticleFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	title?:ValueTypes["StringQueryOperatorInput"],
	author?:ValueTypes["StringQueryOperatorInput"],
	date?:ValueTypes["StringQueryOperatorInput"],
	dateForSEO?:ValueTypes["DateQueryOperatorInput"],
	timeToRead?:ValueTypes["IntQueryOperatorInput"],
	excerpt?:ValueTypes["StringQueryOperatorInput"],
	body?:ValueTypes["StringQueryOperatorInput"],
	hero?:ValueTypes["SitePageContextArticleHeroFilterInput"]
},
	["SitePageContextArticleHeroFilterInput"]: {
	full?:ValueTypes["SitePageContextArticleHeroFullFilterInput"],
	regular?:ValueTypes["SitePageContextArticleHeroRegularFilterInput"],
	narrow?:ValueTypes["SitePageContextArticleHeroNarrowFilterInput"],
	seo?:ValueTypes["SitePageContextArticleHeroSeoFilterInput"]
},
	["SitePageContextArticleHeroFullFilterInput"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroFullFluidFilterInput"]
},
	["SitePageContextArticleHeroFullFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextArticleHeroRegularFilterInput"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroRegularFluidFilterInput"]
},
	["SitePageContextArticleHeroRegularFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextArticleHeroNarrowFilterInput"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroNarrowFluidFilterInput"]
},
	["SitePageContextArticleHeroNarrowFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["FloatQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextArticleHeroSeoFilterInput"]: {
	fixed?:ValueTypes["SitePageContextArticleHeroSeoFixedFilterInput"]
},
	["SitePageContextArticleHeroSeoFixedFilterInput"]: {
	src?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorsFilterListInput"]: {
	elemMatch?:ValueTypes["SitePageContextAuthorsFilterInput"]
},
	["SitePageContextAuthorsFilterInput"]: {
	node?:ValueTypes["SitePageContextAuthorsNodeFilterInput"]
},
	["SitePageContextAuthorsNodeFilterInput"]: {
	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],
	bio?:ValueTypes["StringQueryOperatorInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	social?:ValueTypes["SitePageContextAuthorsNodeSocialFilterListInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	avatar?:ValueTypes["SitePageContextAuthorsNodeAvatarFilterInput"]
},
	["SitePageContextAuthorsNodeSocialFilterListInput"]: {
	elemMatch?:ValueTypes["SitePageContextAuthorsNodeSocialFilterInput"]
},
	["SitePageContextAuthorsNodeSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorsNodeAvatarFilterInput"]: {
	small?:ValueTypes["SitePageContextAuthorsNodeAvatarSmallFilterInput"],
	medium?:ValueTypes["SitePageContextAuthorsNodeAvatarMediumFilterInput"],
	large?:ValueTypes["SitePageContextAuthorsNodeAvatarLargeFilterInput"]
},
	["SitePageContextAuthorsNodeAvatarSmallFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarSmallFluidFilterInput"]
},
	["SitePageContextAuthorsNodeAvatarSmallFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorsNodeAvatarMediumFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarMediumFluidFilterInput"]
},
	["SitePageContextAuthorsNodeAvatarMediumFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorsNodeAvatarLargeFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarLargeFluidFilterInput"]
},
	["SitePageContextAuthorsNodeAvatarLargeFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorFilterInput"]: {
	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],
	bio?:ValueTypes["StringQueryOperatorInput"],
	id?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	social?:ValueTypes["SitePageContextAuthorSocialFilterListInput"],
	slug?:ValueTypes["StringQueryOperatorInput"],
	avatar?:ValueTypes["SitePageContextAuthorAvatarFilterInput"]
},
	["SitePageContextAuthorSocialFilterListInput"]: {
	elemMatch?:ValueTypes["SitePageContextAuthorSocialFilterInput"]
},
	["SitePageContextAuthorSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorAvatarFilterInput"]: {
	small?:ValueTypes["SitePageContextAuthorAvatarSmallFilterInput"],
	medium?:ValueTypes["SitePageContextAuthorAvatarMediumFilterInput"],
	large?:ValueTypes["SitePageContextAuthorAvatarLargeFilterInput"]
},
	["SitePageContextAuthorAvatarSmallFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarSmallFluidFilterInput"]
},
	["SitePageContextAuthorAvatarSmallFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorAvatarMediumFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarMediumFluidFilterInput"]
},
	["SitePageContextAuthorAvatarMediumFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageContextAuthorAvatarLargeFilterInput"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarLargeFluidFilterInput"]
},
	["SitePageContextAuthorAvatarLargeFluidFilterInput"]: {
	base64?:ValueTypes["StringQueryOperatorInput"],
	aspectRatio?:ValueTypes["IntQueryOperatorInput"],
	src?:ValueTypes["StringQueryOperatorInput"],
	srcSet?:ValueTypes["StringQueryOperatorInput"],
	srcWebp?:ValueTypes["StringQueryOperatorInput"],
	srcSetWebp?:ValueTypes["StringQueryOperatorInput"],
	sizes?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePluginFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	resolve?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	version?:ValueTypes["StringQueryOperatorInput"],
	pluginOptions?:ValueTypes["SitePluginPluginOptionsFilterInput"],
	nodeAPIs?:ValueTypes["StringQueryOperatorInput"],
	browserAPIs?:ValueTypes["StringQueryOperatorInput"],
	ssrAPIs?:ValueTypes["StringQueryOperatorInput"],
	pluginFilepath?:ValueTypes["StringQueryOperatorInput"],
	packageJson?:ValueTypes["SitePluginPackageJsonFilterInput"]
},
	["SitePluginPluginOptionsFilterInput"]: {
	path?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	extensions?:ValueTypes["StringQueryOperatorInput"],
	gatsbyRemarkPlugins?:ValueTypes["SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput"],
	displayName?:ValueTypes["BooleanQueryOperatorInput"],
	contentPosts?:ValueTypes["StringQueryOperatorInput"],
	contentAuthors?:ValueTypes["StringQueryOperatorInput"],
	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],
	basePath?:ValueTypes["StringQueryOperatorInput"],
	short_name?:ValueTypes["StringQueryOperatorInput"],
	start_url?:ValueTypes["StringQueryOperatorInput"],
	background_color?:ValueTypes["StringQueryOperatorInput"],
	theme_color?:ValueTypes["StringQueryOperatorInput"],
	display?:ValueTypes["StringQueryOperatorInput"],
	icon?:ValueTypes["StringQueryOperatorInput"],
	pathCheck?:ValueTypes["BooleanQueryOperatorInput"]
},
	["SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput"]: {
	elemMatch?:ValueTypes["SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput"]
},
	["SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput"]: {
	resolve?:ValueTypes["StringQueryOperatorInput"],
	options?:ValueTypes["SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput"]
},
	["SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput"]: {
	maxWidth?:ValueTypes["IntQueryOperatorInput"],
	linkImagesToOriginal?:ValueTypes["BooleanQueryOperatorInput"],
	quality?:ValueTypes["IntQueryOperatorInput"],
	withWebp?:ValueTypes["BooleanQueryOperatorInput"],
	pathPrefix?:ValueTypes["StringQueryOperatorInput"],
	wrapperStyle?:ValueTypes["StringQueryOperatorInput"],
	backgroundColor?:ValueTypes["StringQueryOperatorInput"],
	showCaptions?:ValueTypes["BooleanQueryOperatorInput"],
	tracedSVG?:ValueTypes["BooleanQueryOperatorInput"],
	loading?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePluginPackageJsonFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	description?:ValueTypes["StringQueryOperatorInput"],
	version?:ValueTypes["StringQueryOperatorInput"],
	main?:ValueTypes["StringQueryOperatorInput"],
	license?:ValueTypes["StringQueryOperatorInput"],
	dependencies?:ValueTypes["SitePluginPackageJsonDependenciesFilterListInput"],
	devDependencies?:ValueTypes["SitePluginPackageJsonDevDependenciesFilterListInput"],
	peerDependencies?:ValueTypes["SitePluginPackageJsonPeerDependenciesFilterListInput"],
	keywords?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePluginPackageJsonDependenciesFilterListInput"]: {
	elemMatch?:ValueTypes["SitePluginPackageJsonDependenciesFilterInput"]
},
	["SitePluginPackageJsonDependenciesFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	version?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePluginPackageJsonDevDependenciesFilterListInput"]: {
	elemMatch?:ValueTypes["SitePluginPackageJsonDevDependenciesFilterInput"]
},
	["SitePluginPackageJsonDevDependenciesFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	version?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePluginPackageJsonPeerDependenciesFilterListInput"]: {
	elemMatch?:ValueTypes["SitePluginPackageJsonPeerDependenciesFilterInput"]
},
	["SitePluginPackageJsonPeerDependenciesFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	version?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePage"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	path?:string,
	internalComponentName?:string,
	component?:string,
	componentChunkName?:string,
	isCreatedByStatefulCreatePages?:boolean,
	context?:ValueTypes["SitePageContext"],
	pluginCreator?:ValueTypes["SitePlugin"],
	pluginCreatorId?:string,
	componentPath?:string
},
	["SitePageContext"]: {
	basePath?:string,
	skip?:number,
	limit?:number,
	group?:(ValueTypes["SitePageContextGroup"] | undefined)[],
	pathPrefix?:string,
	first?:boolean,
	last?:boolean,
	index?:number,
	pageCount?:number,
	additionalContext?:ValueTypes["SitePageContextAdditionalContext"],
	article?:ValueTypes["SitePageContextArticle"],
	authors?:(ValueTypes["SitePageContextAuthors"] | undefined)[],
	slug?:string,
	id?:string,
	title?:string,
	author?:ValueTypes["SitePageContextAuthor"],
	originalPath?:string
},
	["SitePageContextGroup"]: {
	node?:ValueTypes["SitePageContextGroupNode"]
},
	["SitePageContextGroupNode"]: {
	id?:string,
	slug?:string,
	title?:string,
	author?:string,
	date?:string,
	dateForSEO?:ValueTypes["Date"],
	timeToRead?:number,
	excerpt?:string,
	body?:string,
	hero?:ValueTypes["SitePageContextGroupNodeHero"]
},
	["SitePageContextGroupNodeHero"]: {
	full?:ValueTypes["SitePageContextGroupNodeHeroFull"],
	regular?:ValueTypes["SitePageContextGroupNodeHeroRegular"],
	narrow?:ValueTypes["SitePageContextGroupNodeHeroNarrow"],
	seo?:ValueTypes["SitePageContextGroupNodeHeroSeo"]
},
	["SitePageContextGroupNodeHeroFull"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroFullFluid"]
},
	["SitePageContextGroupNodeHeroFullFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextGroupNodeHeroRegular"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroRegularFluid"]
},
	["SitePageContextGroupNodeHeroRegularFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextGroupNodeHeroNarrow"]: {
	fluid?:ValueTypes["SitePageContextGroupNodeHeroNarrowFluid"]
},
	["SitePageContextGroupNodeHeroNarrowFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextGroupNodeHeroSeo"]: {
	fixed?:ValueTypes["SitePageContextGroupNodeHeroSeoFixed"]
},
	["SitePageContextGroupNodeHeroSeoFixed"]: {
	src?:string
},
	["SitePageContextAdditionalContext"]: {
	basePath?:string,
	skip?:number,
	limit?:number,
	author?:ValueTypes["SitePageContextAdditionalContextAuthor"],
	originalPath?:string
},
	["SitePageContextAdditionalContextAuthor"]: {
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(ValueTypes["SitePageContextAdditionalContextAuthorSocial"] | undefined)[],
	slug?:string,
	avatar?:ValueTypes["SitePageContextAdditionalContextAuthorAvatar"]
},
	["SitePageContextAdditionalContextAuthorSocial"]: {
	name?:string,
	url?:string
},
	["SitePageContextAdditionalContextAuthorAvatar"]: {
	small?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarSmall"],
	medium?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarMedium"],
	large?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarLarge"]
},
	["SitePageContextAdditionalContextAuthorAvatarSmall"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarSmallFluid"]
},
	["SitePageContextAdditionalContextAuthorAvatarSmallFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAdditionalContextAuthorAvatarMedium"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarMediumFluid"]
},
	["SitePageContextAdditionalContextAuthorAvatarMediumFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAdditionalContextAuthorAvatarLarge"]: {
	fluid?:ValueTypes["SitePageContextAdditionalContextAuthorAvatarLargeFluid"]
},
	["SitePageContextAdditionalContextAuthorAvatarLargeFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextArticle"]: {
	id?:string,
	slug?:string,
	title?:string,
	author?:string,
	date?:string,
	dateForSEO?:ValueTypes["Date"],
	timeToRead?:number,
	excerpt?:string,
	body?:string,
	hero?:ValueTypes["SitePageContextArticleHero"]
},
	["SitePageContextArticleHero"]: {
	full?:ValueTypes["SitePageContextArticleHeroFull"],
	regular?:ValueTypes["SitePageContextArticleHeroRegular"],
	narrow?:ValueTypes["SitePageContextArticleHeroNarrow"],
	seo?:ValueTypes["SitePageContextArticleHeroSeo"]
},
	["SitePageContextArticleHeroFull"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroFullFluid"]
},
	["SitePageContextArticleHeroFullFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextArticleHeroRegular"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroRegularFluid"]
},
	["SitePageContextArticleHeroRegularFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextArticleHeroNarrow"]: {
	fluid?:ValueTypes["SitePageContextArticleHeroNarrowFluid"]
},
	["SitePageContextArticleHeroNarrowFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextArticleHeroSeo"]: {
	fixed?:ValueTypes["SitePageContextArticleHeroSeoFixed"]
},
	["SitePageContextArticleHeroSeoFixed"]: {
	src?:string
},
	["SitePageContextAuthors"]: {
	node?:ValueTypes["SitePageContextAuthorsNode"]
},
	["SitePageContextAuthorsNode"]: {
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(ValueTypes["SitePageContextAuthorsNodeSocial"] | undefined)[],
	slug?:string,
	avatar?:ValueTypes["SitePageContextAuthorsNodeAvatar"]
},
	["SitePageContextAuthorsNodeSocial"]: {
	name?:string,
	url?:string
},
	["SitePageContextAuthorsNodeAvatar"]: {
	small?:ValueTypes["SitePageContextAuthorsNodeAvatarSmall"],
	medium?:ValueTypes["SitePageContextAuthorsNodeAvatarMedium"],
	large?:ValueTypes["SitePageContextAuthorsNodeAvatarLarge"]
},
	["SitePageContextAuthorsNodeAvatarSmall"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarSmallFluid"]
},
	["SitePageContextAuthorsNodeAvatarSmallFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAuthorsNodeAvatarMedium"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarMediumFluid"]
},
	["SitePageContextAuthorsNodeAvatarMediumFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAuthorsNodeAvatarLarge"]: {
	fluid?:ValueTypes["SitePageContextAuthorsNodeAvatarLargeFluid"]
},
	["SitePageContextAuthorsNodeAvatarLargeFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAuthor"]: {
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(ValueTypes["SitePageContextAuthorSocial"] | undefined)[],
	slug?:string,
	avatar?:ValueTypes["SitePageContextAuthorAvatar"]
},
	["SitePageContextAuthorSocial"]: {
	name?:string,
	url?:string
},
	["SitePageContextAuthorAvatar"]: {
	small?:ValueTypes["SitePageContextAuthorAvatarSmall"],
	medium?:ValueTypes["SitePageContextAuthorAvatarMedium"],
	large?:ValueTypes["SitePageContextAuthorAvatarLarge"]
},
	["SitePageContextAuthorAvatarSmall"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarSmallFluid"]
},
	["SitePageContextAuthorAvatarSmallFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAuthorAvatarMedium"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarMediumFluid"]
},
	["SitePageContextAuthorAvatarMediumFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePageContextAuthorAvatarLarge"]: {
	fluid?:ValueTypes["SitePageContextAuthorAvatarLargeFluid"]
},
	["SitePageContextAuthorAvatarLargeFluid"]: {
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
},
	["SitePlugin"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	resolve?:string,
	name?:string,
	version?:string,
	pluginOptions?:ValueTypes["SitePluginPluginOptions"],
	nodeAPIs?:(string | undefined)[],
	browserAPIs?:(string | undefined)[],
	ssrAPIs?:(string | undefined)[],
	pluginFilepath?:string,
	packageJson?:ValueTypes["SitePluginPackageJson"]
},
	["SitePluginPluginOptions"]: {
	path?:string,
	name?:string,
	extensions?:(string | undefined)[],
	gatsbyRemarkPlugins?:(ValueTypes["SitePluginPluginOptionsGatsbyRemarkPlugins"] | undefined)[],
	displayName?:boolean,
	contentPosts?:string,
	contentAuthors?:string,
	authorsPage?:boolean,
	basePath?:string,
	short_name?:string,
	start_url?:string,
	background_color?:string,
	theme_color?:string,
	display?:string,
	icon?:string,
	pathCheck?:boolean
},
	["SitePluginPluginOptionsGatsbyRemarkPlugins"]: {
	resolve?:string,
	options?:ValueTypes["SitePluginPluginOptionsGatsbyRemarkPluginsOptions"]
},
	["SitePluginPluginOptionsGatsbyRemarkPluginsOptions"]: {
	maxWidth?:number,
	linkImagesToOriginal?:boolean,
	quality?:number,
	withWebp?:boolean,
	pathPrefix?:string,
	wrapperStyle?:string,
	backgroundColor?:string,
	showCaptions?:boolean,
	tracedSVG?:boolean,
	loading?:string
},
	["SitePluginPackageJson"]: {
	name?:string,
	description?:string,
	version?:string,
	main?:string,
	license?:string,
	dependencies?:(ValueTypes["SitePluginPackageJsonDependencies"] | undefined)[],
	devDependencies?:(ValueTypes["SitePluginPackageJsonDevDependencies"] | undefined)[],
	peerDependencies?:(ValueTypes["SitePluginPackageJsonPeerDependencies"] | undefined)[],
	keywords?:(string | undefined)[]
},
	["SitePluginPackageJsonDependencies"]: {
	name?:string,
	version?:string
},
	["SitePluginPackageJsonDevDependencies"]: {
	name?:string,
	version?:string
},
	["SitePluginPackageJsonPeerDependencies"]: {
	name?:string,
	version?:string
},
	["SitePageFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	path?:ValueTypes["StringQueryOperatorInput"],
	internalComponentName?:ValueTypes["StringQueryOperatorInput"],
	component?:ValueTypes["StringQueryOperatorInput"],
	componentChunkName?:ValueTypes["StringQueryOperatorInput"],
	isCreatedByStatefulCreatePages?:ValueTypes["BooleanQueryOperatorInput"],
	context?:ValueTypes["SitePageContextFilterInput"],
	pluginCreator?:ValueTypes["SitePluginFilterInput"],
	pluginCreatorId?:ValueTypes["StringQueryOperatorInput"],
	componentPath?:ValueTypes["StringQueryOperatorInput"]
},
	["SitePageSortInput"]: {
	fields?:(ValueTypes["SitePageFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["SitePageFieldsEnum"]:SitePageFieldsEnum,
	["SitePageConnection"]: {
	totalCount:number,
	edges:ValueTypes["SitePageEdge"][],
	nodes:ValueTypes["SitePage"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["SitePageFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["SitePageFieldsEnum"]}) => ValueTypes["SitePageGroupConnection"][]
},
	["SitePageEdge"]: {
	next?:ValueTypes["SitePage"],
	node:ValueTypes["SitePage"],
	previous?:ValueTypes["SitePage"]
},
	["SitePageGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["SitePageEdge"][],
	nodes:ValueTypes["SitePage"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["SitePluginSortInput"]: {
	fields?:(ValueTypes["SitePluginFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["SitePluginFieldsEnum"]:SitePluginFieldsEnum,
	["SitePluginConnection"]: {
	totalCount:number,
	edges:ValueTypes["SitePluginEdge"][],
	nodes:ValueTypes["SitePlugin"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["SitePluginFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["SitePluginFieldsEnum"]}) => ValueTypes["SitePluginGroupConnection"][]
},
	["SitePluginEdge"]: {
	next?:ValueTypes["SitePlugin"],
	node:ValueTypes["SitePlugin"],
	previous?:ValueTypes["SitePlugin"]
},
	["SitePluginGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["SitePluginEdge"][],
	nodes:ValueTypes["SitePlugin"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["SiteSiteMetadataFilterInput"]: {
	title?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	siteUrl?:ValueTypes["StringQueryOperatorInput"],
	description?:ValueTypes["StringQueryOperatorInput"],
	hero?:ValueTypes["SiteSiteMetadataHeroFilterInput"],
	social?:ValueTypes["SiteSiteMetadataSocialFilterListInput"]
},
	["SiteSiteMetadataHeroFilterInput"]: {
	heading?:ValueTypes["StringQueryOperatorInput"],
	maxWidth?:ValueTypes["IntQueryOperatorInput"]
},
	["SiteSiteMetadataSocialFilterListInput"]: {
	elemMatch?:ValueTypes["SiteSiteMetadataSocialFilterInput"]
},
	["SiteSiteMetadataSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["SiteMappingFilterInput"]: {
	Mdx_frontmatter_author?:ValueTypes["StringQueryOperatorInput"]
},
	["Site"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	siteMetadata?:ValueTypes["SiteSiteMetadata"],
	port?:number,
	host?:string,
	mapping?:ValueTypes["SiteMapping"],
	polyfill?:boolean,
	pathPrefix?:string,
	buildTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"]
},
	["SiteSiteMetadata"]: {
	title?:string,
	name?:string,
	siteUrl?:string,
	description?:string,
	hero?:ValueTypes["SiteSiteMetadataHero"],
	social?:(ValueTypes["SiteSiteMetadataSocial"] | undefined)[]
},
	["SiteSiteMetadataHero"]: {
	heading?:string,
	maxWidth?:number
},
	["SiteSiteMetadataSocial"]: {
	name?:string,
	url?:string
},
	["SiteMapping"]: {
	Mdx_frontmatter_author?:string
},
	["SiteFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	siteMetadata?:ValueTypes["SiteSiteMetadataFilterInput"],
	port?:ValueTypes["IntQueryOperatorInput"],
	host?:ValueTypes["StringQueryOperatorInput"],
	mapping?:ValueTypes["SiteMappingFilterInput"],
	polyfill?:ValueTypes["BooleanQueryOperatorInput"],
	pathPrefix?:ValueTypes["StringQueryOperatorInput"],
	buildTime?:ValueTypes["DateQueryOperatorInput"]
},
	["SiteSortInput"]: {
	fields?:(ValueTypes["SiteFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["SiteFieldsEnum"]:SiteFieldsEnum,
	["SiteConnection"]: {
	totalCount:number,
	edges:ValueTypes["SiteEdge"][],
	nodes:ValueTypes["Site"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["SiteFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["SiteFieldsEnum"]}) => ValueTypes["SiteGroupConnection"][]
},
	["SiteEdge"]: {
	next?:ValueTypes["Site"],
	node:ValueTypes["Site"],
	previous?:ValueTypes["Site"]
},
	["SiteGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["SiteEdge"][],
	nodes:ValueTypes["Site"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["Directory"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	sourceInstanceName?:string,
	absolutePath?:string,
	relativePath?:string,
	extension?:string,
	size?:number,
	prettySize?:string,
	modifiedTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	accessTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	changeTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	birthTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	root?:string,
	dir?:string,
	base?:string,
	ext?:string,
	name?:string,
	relativeDirectory?:string,
	dev?:number,
	mode?:number,
	nlink?:number,
	uid?:number,
	gid?:number,
	rdev?:number,
	blksize?:number,
	ino?:number,
	blocks?:number,
	atimeMs?:number,
	mtimeMs?:number,
	ctimeMs?:number,
	birthtimeMs?:number,
	atime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	mtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	ctime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"],
	birthtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => ValueTypes["Date"]
},
	["DirectoryFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	sourceInstanceName?:ValueTypes["StringQueryOperatorInput"],
	absolutePath?:ValueTypes["StringQueryOperatorInput"],
	relativePath?:ValueTypes["StringQueryOperatorInput"],
	extension?:ValueTypes["StringQueryOperatorInput"],
	size?:ValueTypes["IntQueryOperatorInput"],
	prettySize?:ValueTypes["StringQueryOperatorInput"],
	modifiedTime?:ValueTypes["DateQueryOperatorInput"],
	accessTime?:ValueTypes["DateQueryOperatorInput"],
	changeTime?:ValueTypes["DateQueryOperatorInput"],
	birthTime?:ValueTypes["DateQueryOperatorInput"],
	root?:ValueTypes["StringQueryOperatorInput"],
	dir?:ValueTypes["StringQueryOperatorInput"],
	base?:ValueTypes["StringQueryOperatorInput"],
	ext?:ValueTypes["StringQueryOperatorInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	relativeDirectory?:ValueTypes["StringQueryOperatorInput"],
	dev?:ValueTypes["IntQueryOperatorInput"],
	mode?:ValueTypes["IntQueryOperatorInput"],
	nlink?:ValueTypes["IntQueryOperatorInput"],
	uid?:ValueTypes["IntQueryOperatorInput"],
	gid?:ValueTypes["IntQueryOperatorInput"],
	rdev?:ValueTypes["IntQueryOperatorInput"],
	blksize?:ValueTypes["IntQueryOperatorInput"],
	ino?:ValueTypes["IntQueryOperatorInput"],
	blocks?:ValueTypes["IntQueryOperatorInput"],
	atimeMs?:ValueTypes["FloatQueryOperatorInput"],
	mtimeMs?:ValueTypes["FloatQueryOperatorInput"],
	ctimeMs?:ValueTypes["FloatQueryOperatorInput"],
	birthtimeMs?:ValueTypes["FloatQueryOperatorInput"],
	atime?:ValueTypes["DateQueryOperatorInput"],
	mtime?:ValueTypes["DateQueryOperatorInput"],
	ctime?:ValueTypes["DateQueryOperatorInput"],
	birthtime?:ValueTypes["DateQueryOperatorInput"]
},
	["DirectorySortInput"]: {
	fields?:(ValueTypes["DirectoryFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["DirectoryFieldsEnum"]:DirectoryFieldsEnum,
	["DirectoryConnection"]: {
	totalCount:number,
	edges:ValueTypes["DirectoryEdge"][],
	nodes:ValueTypes["Directory"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["DirectoryFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["DirectoryFieldsEnum"]}) => ValueTypes["DirectoryGroupConnection"][]
},
	["DirectoryEdge"]: {
	next?:ValueTypes["Directory"],
	node:ValueTypes["Directory"],
	previous?:ValueTypes["Directory"]
},
	["DirectoryGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["DirectoryEdge"][],
	nodes:ValueTypes["Directory"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["AuthorsYamlSortInput"]: {
	fields?:(ValueTypes["AuthorsYamlFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["AuthorsYamlFieldsEnum"]:AuthorsYamlFieldsEnum,
	["AuthorsYamlConnection"]: {
	totalCount:number,
	edges:ValueTypes["AuthorsYamlEdge"][],
	nodes:ValueTypes["AuthorsYaml"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["AuthorsYamlFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["AuthorsYamlFieldsEnum"]}) => ValueTypes["AuthorsYamlGroupConnection"][]
},
	["AuthorsYamlEdge"]: {
	next?:ValueTypes["AuthorsYaml"],
	node:ValueTypes["AuthorsYaml"],
	previous?:ValueTypes["AuthorsYaml"]
},
	["AuthorsYamlGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["AuthorsYamlEdge"][],
	nodes:ValueTypes["AuthorsYaml"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
},
	["AuthorSocialFilterListInput"]: {
	elemMatch?:ValueTypes["AuthorSocialFilterInput"]
},
	["AuthorSocialFilterInput"]: {
	name?:ValueTypes["StringQueryOperatorInput"],
	url?:ValueTypes["StringQueryOperatorInput"]
},
	["Author"]: {
	id:string,
	parent?:ValueTypes["Node"],
	children:ValueTypes["Node"][],
	internal:ValueTypes["Internal"],
	name?:string,
	bio?:string,
	avatar?:ValueTypes["File"],
	featured?:boolean,
	social?:(ValueTypes["AuthorSocial"] | undefined)[],
	authorsPage?:boolean,
	slug?:string
},
	["AuthorSocial"]: {
	name?:string,
	url?:string
},
	["AuthorFilterInput"]: {
	id?:ValueTypes["StringQueryOperatorInput"],
	parent?:ValueTypes["NodeFilterInput"],
	children?:ValueTypes["NodeFilterListInput"],
	internal?:ValueTypes["InternalFilterInput"],
	name?:ValueTypes["StringQueryOperatorInput"],
	bio?:ValueTypes["StringQueryOperatorInput"],
	avatar?:ValueTypes["FileFilterInput"],
	featured?:ValueTypes["BooleanQueryOperatorInput"],
	social?:ValueTypes["AuthorSocialFilterListInput"],
	authorsPage?:ValueTypes["BooleanQueryOperatorInput"],
	slug?:ValueTypes["StringQueryOperatorInput"]
},
	["AuthorSortInput"]: {
	fields?:(ValueTypes["AuthorFieldsEnum"] | undefined)[],
	order?:(ValueTypes["SortOrderEnum"] | undefined)[]
},
	["AuthorFieldsEnum"]:AuthorFieldsEnum,
	["AuthorConnection"]: {
	totalCount:number,
	edges:ValueTypes["AuthorEdge"][],
	nodes:ValueTypes["Author"][],
	pageInfo:ValueTypes["PageInfo"],
	distinct:(props:{	field:ValueTypes["AuthorFieldsEnum"]}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ValueTypes["AuthorFieldsEnum"]}) => ValueTypes["AuthorGroupConnection"][]
},
	["AuthorEdge"]: {
	next?:ValueTypes["Author"],
	node:ValueTypes["Author"],
	previous?:ValueTypes["Author"]
},
	["AuthorGroupConnection"]: {
	totalCount:number,
	edges:ValueTypes["AuthorEdge"][],
	nodes:ValueTypes["Author"][],
	pageInfo:ValueTypes["PageInfo"],
	field:string,
	fieldValue?:string
}
  }

export type Query = {
	__typename?: "Query",
	imageSharp:(props:{	id?:StringQueryOperatorInput,	fixed?:ImageSharpFixedFilterInput,	resolutions?:ImageSharpResolutionsFilterInput,	fluid?:ImageSharpFluidFilterInput,	sizes?:ImageSharpSizesFilterInput,	original?:ImageSharpOriginalFilterInput,	resize?:ImageSharpResizeFilterInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput}) => ImageSharp,
	allImageSharp:(props:{	filter?:ImageSharpFilterInput,	sort?:ImageSharpSortInput,	skip?:number,	limit?:number}) => ImageSharpConnection,
	file:(props:{	birthtime?:DateQueryOperatorInput,	birthtimeMs?:FloatQueryOperatorInput,	sourceInstanceName?:StringQueryOperatorInput,	absolutePath?:StringQueryOperatorInput,	relativePath?:StringQueryOperatorInput,	extension?:StringQueryOperatorInput,	size?:IntQueryOperatorInput,	prettySize?:StringQueryOperatorInput,	modifiedTime?:DateQueryOperatorInput,	accessTime?:DateQueryOperatorInput,	changeTime?:DateQueryOperatorInput,	birthTime?:DateQueryOperatorInput,	root?:StringQueryOperatorInput,	dir?:StringQueryOperatorInput,	base?:StringQueryOperatorInput,	ext?:StringQueryOperatorInput,	name?:StringQueryOperatorInput,	relativeDirectory?:StringQueryOperatorInput,	dev?:IntQueryOperatorInput,	mode?:IntQueryOperatorInput,	nlink?:IntQueryOperatorInput,	uid?:IntQueryOperatorInput,	gid?:IntQueryOperatorInput,	rdev?:IntQueryOperatorInput,	blksize?:IntQueryOperatorInput,	ino?:IntQueryOperatorInput,	blocks?:IntQueryOperatorInput,	atimeMs?:FloatQueryOperatorInput,	mtimeMs?:FloatQueryOperatorInput,	ctimeMs?:FloatQueryOperatorInput,	atime?:DateQueryOperatorInput,	mtime?:DateQueryOperatorInput,	ctime?:DateQueryOperatorInput,	publicURL?:StringQueryOperatorInput,	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	childMdx?:MdxFilterInput,	childImageSharp?:ImageSharpFilterInput,	childrenAuthorsYaml?:AuthorsYamlFilterListInput}) => File,
	allFile:(props:{	filter?:FileFilterInput,	sort?:FileSortInput,	skip?:number,	limit?:number}) => FileConnection,
	mdx:(props:{	rawBody?:StringQueryOperatorInput,	fileAbsolutePath?:StringQueryOperatorInput,	frontmatter?:MdxFrontmatterFilterInput,	body?:StringQueryOperatorInput,	excerpt?:StringQueryOperatorInput,	headings?:MdxHeadingMdxFilterListInput,	html?:StringQueryOperatorInput,	mdxAST?:JSONQueryOperatorInput,	tableOfContents?:JSONQueryOperatorInput,	timeToRead?:IntQueryOperatorInput,	wordCount?:MdxWordCountFilterInput,	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput}) => Mdx,
	allMdx:(props:{	filter?:MdxFilterInput,	sort?:MdxSortInput,	skip?:number,	limit?:number}) => MdxConnection,
	article:(props:{	id?:StringQueryOperatorInput,	slug?:StringQueryOperatorInput,	title?:StringQueryOperatorInput,	date?:DateQueryOperatorInput,	author?:StringQueryOperatorInput,	excerpt?:StringQueryOperatorInput,	body?:StringQueryOperatorInput,	hero?:FileFilterInput,	timeToRead?:IntQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput}) => Article,
	allArticle:(props:{	filter?:ArticleFilterInput,	sort?:ArticleSortInput,	skip?:number,	limit?:number}) => ArticleConnection,
	markdownRemark:(props:{	id?:StringQueryOperatorInput,	html?:StringQueryOperatorInput,	htmlAst?:JSONQueryOperatorInput,	excerpt?:StringQueryOperatorInput,	excerptAst?:JSONQueryOperatorInput,	headings?:MarkdownHeadingFilterListInput,	timeToRead?:IntQueryOperatorInput,	tableOfContents?:StringQueryOperatorInput,	wordCount?:MarkdownWordCountFilterInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput}) => MarkdownRemark,
	allMarkdownRemark:(props:{	filter?:MarkdownRemarkFilterInput,	sort?:MarkdownRemarkSortInput,	skip?:number,	limit?:number}) => MarkdownRemarkConnection,
	sitePage:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	path?:StringQueryOperatorInput,	internalComponentName?:StringQueryOperatorInput,	component?:StringQueryOperatorInput,	componentChunkName?:StringQueryOperatorInput,	isCreatedByStatefulCreatePages?:BooleanQueryOperatorInput,	context?:SitePageContextFilterInput,	pluginCreator?:SitePluginFilterInput,	pluginCreatorId?:StringQueryOperatorInput,	componentPath?:StringQueryOperatorInput}) => SitePage,
	allSitePage:(props:{	filter?:SitePageFilterInput,	sort?:SitePageSortInput,	skip?:number,	limit?:number}) => SitePageConnection,
	sitePlugin:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	resolve?:StringQueryOperatorInput,	name?:StringQueryOperatorInput,	version?:StringQueryOperatorInput,	pluginOptions?:SitePluginPluginOptionsFilterInput,	nodeAPIs?:StringQueryOperatorInput,	browserAPIs?:StringQueryOperatorInput,	ssrAPIs?:StringQueryOperatorInput,	pluginFilepath?:StringQueryOperatorInput,	packageJson?:SitePluginPackageJsonFilterInput}) => SitePlugin,
	allSitePlugin:(props:{	filter?:SitePluginFilterInput,	sort?:SitePluginSortInput,	skip?:number,	limit?:number}) => SitePluginConnection,
	site:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	siteMetadata?:SiteSiteMetadataFilterInput,	port?:IntQueryOperatorInput,	host?:StringQueryOperatorInput,	mapping?:SiteMappingFilterInput,	polyfill?:BooleanQueryOperatorInput,	pathPrefix?:StringQueryOperatorInput,	buildTime?:DateQueryOperatorInput}) => Site,
	allSite:(props:{	filter?:SiteFilterInput,	sort?:SiteSortInput,	skip?:number,	limit?:number}) => SiteConnection,
	directory:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	sourceInstanceName?:StringQueryOperatorInput,	absolutePath?:StringQueryOperatorInput,	relativePath?:StringQueryOperatorInput,	extension?:StringQueryOperatorInput,	size?:IntQueryOperatorInput,	prettySize?:StringQueryOperatorInput,	modifiedTime?:DateQueryOperatorInput,	accessTime?:DateQueryOperatorInput,	changeTime?:DateQueryOperatorInput,	birthTime?:DateQueryOperatorInput,	root?:StringQueryOperatorInput,	dir?:StringQueryOperatorInput,	base?:StringQueryOperatorInput,	ext?:StringQueryOperatorInput,	name?:StringQueryOperatorInput,	relativeDirectory?:StringQueryOperatorInput,	dev?:IntQueryOperatorInput,	mode?:IntQueryOperatorInput,	nlink?:IntQueryOperatorInput,	uid?:IntQueryOperatorInput,	gid?:IntQueryOperatorInput,	rdev?:IntQueryOperatorInput,	blksize?:IntQueryOperatorInput,	ino?:IntQueryOperatorInput,	blocks?:IntQueryOperatorInput,	atimeMs?:FloatQueryOperatorInput,	mtimeMs?:FloatQueryOperatorInput,	ctimeMs?:FloatQueryOperatorInput,	birthtimeMs?:FloatQueryOperatorInput,	atime?:DateQueryOperatorInput,	mtime?:DateQueryOperatorInput,	ctime?:DateQueryOperatorInput,	birthtime?:DateQueryOperatorInput}) => Directory,
	allDirectory:(props:{	filter?:DirectoryFilterInput,	sort?:DirectorySortInput,	skip?:number,	limit?:number}) => DirectoryConnection,
	authorsYaml:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	name?:StringQueryOperatorInput,	bio?:StringQueryOperatorInput,	avatar?:FileFilterInput,	featured?:BooleanQueryOperatorInput,	social?:AuthorsYamlSocialFilterListInput}) => AuthorsYaml,
	allAuthorsYaml:(props:{	filter?:AuthorsYamlFilterInput,	sort?:AuthorsYamlSortInput,	skip?:number,	limit?:number}) => AuthorsYamlConnection,
	author:(props:{	id?:StringQueryOperatorInput,	parent?:NodeFilterInput,	children?:NodeFilterListInput,	internal?:InternalFilterInput,	name?:StringQueryOperatorInput,	bio?:StringQueryOperatorInput,	avatar?:FileFilterInput,	featured?:BooleanQueryOperatorInput,	social?:AuthorSocialFilterListInput,	authorsPage?:BooleanQueryOperatorInput,	slug?:StringQueryOperatorInput}) => Author,
	allAuthor:(props:{	filter?:AuthorFilterInput,	sort?:AuthorSortInput,	skip?:number,	limit?:number}) => AuthorConnection
}

export type StringQueryOperatorInput = {
		eq?:string,
	ne?:string,
	in?:(string | undefined)[],
	nin?:(string | undefined)[],
	regex?:string,
	glob?:string
}

export type ImageSharpFixedFilterInput = {
		base64?:StringQueryOperatorInput,
	tracedSVG?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	width?:FloatQueryOperatorInput,
	height?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	originalName?:StringQueryOperatorInput
}

export type FloatQueryOperatorInput = {
		eq?:number,
	ne?:number,
	gt?:number,
	gte?:number,
	lt?:number,
	lte?:number,
	in?:(number | undefined)[],
	nin?:(number | undefined)[]
}

export type ImageSharpResolutionsFilterInput = {
		base64?:StringQueryOperatorInput,
	tracedSVG?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	width?:FloatQueryOperatorInput,
	height?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	originalName?:StringQueryOperatorInput
}

export type ImageSharpFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	tracedSVG?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput,
	originalImg?:StringQueryOperatorInput,
	originalName?:StringQueryOperatorInput,
	presentationWidth?:IntQueryOperatorInput,
	presentationHeight?:IntQueryOperatorInput
}

export type IntQueryOperatorInput = {
		eq?:number,
	ne?:number,
	gt?:number,
	gte?:number,
	lt?:number,
	lte?:number,
	in?:(number | undefined)[],
	nin?:(number | undefined)[]
}

export type ImageSharpSizesFilterInput = {
		base64?:StringQueryOperatorInput,
	tracedSVG?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput,
	originalImg?:StringQueryOperatorInput,
	originalName?:StringQueryOperatorInput,
	presentationWidth?:IntQueryOperatorInput,
	presentationHeight?:IntQueryOperatorInput
}

export type ImageSharpOriginalFilterInput = {
		width?:FloatQueryOperatorInput,
	height?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput
}

export type ImageSharpResizeFilterInput = {
		src?:StringQueryOperatorInput,
	tracedSVG?:StringQueryOperatorInput,
	width?:IntQueryOperatorInput,
	height?:IntQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	originalName?:StringQueryOperatorInput
}

export type NodeFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput
}

export type NodeFilterListInput = {
		elemMatch?:NodeFilterInput
}

export type InternalFilterInput = {
		content?:StringQueryOperatorInput,
	contentDigest?:StringQueryOperatorInput,
	description?:StringQueryOperatorInput,
	fieldOwners?:StringQueryOperatorInput,
	ignoreType?:BooleanQueryOperatorInput,
	mediaType?:StringQueryOperatorInput,
	owner?:StringQueryOperatorInput,
	type?:StringQueryOperatorInput
}

export type BooleanQueryOperatorInput = {
		eq?:boolean,
	ne?:boolean,
	in?:(boolean | undefined)[],
	nin?:(boolean | undefined)[]
}

export type ImageSharp = {
	__typename?: "ImageSharp",
	id:string,
	fixed:(props:{	width?:number,	height?:number,	base64Width?:number,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:DuotoneGradient,	traceSVG?:Potrace,	quality?:number,	toFormat?:ImageFormat,	toFormatBase64?:ImageFormat,	cropFocus?:ImageCropFocus,	fit?:ImageFit,	background?:string,	rotate?:number,	trim?:number}) => ImageSharpFixed,
	resolutions:(props:{	width?:number,	height?:number,	base64Width?:number,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:DuotoneGradient,	traceSVG?:Potrace,	quality?:number,	toFormat?:ImageFormat,	toFormatBase64?:ImageFormat,	cropFocus?:ImageCropFocus,	fit?:ImageFit,	background?:string,	rotate?:number,	trim?:number}) => ImageSharpResolutions,
	fluid:(props:{	maxWidth?:number,	maxHeight?:number,	base64Width?:number,	grayscale?:boolean,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	duotone?:DuotoneGradient,	traceSVG?:Potrace,	quality?:number,	toFormat?:ImageFormat,	toFormatBase64?:ImageFormat,	cropFocus?:ImageCropFocus,	fit?:ImageFit,	background?:string,	rotate?:number,	trim?:number,	sizes?:string,	/** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
	srcSetBreakpoints?:(number | undefined)[]}) => ImageSharpFluid,
	sizes:(props:{	maxWidth?:number,	maxHeight?:number,	base64Width?:number,	grayscale?:boolean,	jpegProgressive?:boolean,	pngCompressionSpeed?:number,	duotone?:DuotoneGradient,	traceSVG?:Potrace,	quality?:number,	toFormat?:ImageFormat,	toFormatBase64?:ImageFormat,	cropFocus?:ImageCropFocus,	fit?:ImageFit,	background?:string,	rotate?:number,	trim?:number,	sizes?:string,	/** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
	srcSetBreakpoints?:(number | undefined)[]}) => ImageSharpSizes,
	original?:ImageSharpOriginal,
	resize:(props:{	width?:number,	height?:number,	quality?:number,	jpegProgressive?:boolean,	pngCompressionLevel?:number,	pngCompressionSpeed?:number,	grayscale?:boolean,	duotone?:DuotoneGradient,	base64?:boolean,	traceSVG?:Potrace,	toFormat?:ImageFormat,	cropFocus?:ImageCropFocus,	fit?:ImageFit,	background?:string,	rotate?:number,	trim?:number}) => ImageSharpResize,
	parent?:Node,
	children:Node[],
	internal:Internal
}

/** Node Interface */
export type Node = {
	__typename?: "Node",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal
}

export type Internal = {
	__typename?: "Internal",
	content?:string,
	contentDigest:string,
	description?:string,
	fieldOwners?:(string | undefined)[],
	ignoreType?:boolean,
	mediaType?:string,
	owner:string,
	type:string
}

export type DuotoneGradient = {
		highlight:string,
	shadow:string,
	opacity?:number
}

export type Potrace = {
		turnPolicy?:PotraceTurnPolicy,
	turdSize?:number,
	alphaMax?:number,
	optCurve?:boolean,
	optTolerance?:number,
	threshold?:number,
	blackOnWhite?:boolean,
	color?:string,
	background?:string
}

export enum PotraceTurnPolicy {
	TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
	TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
	TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
	TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
	TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
	TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY"
}

export enum ImageFormat {
	NO_CHANGE = "NO_CHANGE",
	JPG = "JPG",
	PNG = "PNG",
	WEBP = "WEBP"
}

export enum ImageCropFocus {
	CENTER = "CENTER",
	NORTH = "NORTH",
	NORTHEAST = "NORTHEAST",
	EAST = "EAST",
	SOUTHEAST = "SOUTHEAST",
	SOUTH = "SOUTH",
	SOUTHWEST = "SOUTHWEST",
	WEST = "WEST",
	NORTHWEST = "NORTHWEST",
	ENTROPY = "ENTROPY",
	ATTENTION = "ATTENTION"
}

export enum ImageFit {
	COVER = "COVER",
	CONTAIN = "CONTAIN",
	FILL = "FILL"
}

export type ImageSharpFixed = {
	__typename?: "ImageSharpFixed",
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	width?:number,
	height?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	originalName?:string
}

export type ImageSharpResolutions = {
	__typename?: "ImageSharpResolutions",
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	width?:number,
	height?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	originalName?:string
}

export type ImageSharpFluid = {
	__typename?: "ImageSharpFluid",
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string,
	originalImg?:string,
	originalName?:string,
	presentationWidth?:number,
	presentationHeight?:number
}

export type ImageSharpSizes = {
	__typename?: "ImageSharpSizes",
	base64?:string,
	tracedSVG?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string,
	originalImg?:string,
	originalName?:string,
	presentationWidth?:number,
	presentationHeight?:number
}

export type ImageSharpOriginal = {
	__typename?: "ImageSharpOriginal",
	width?:number,
	height?:number,
	src?:string
}

export type ImageSharpResize = {
	__typename?: "ImageSharpResize",
	src?:string,
	tracedSVG?:string,
	width?:number,
	height?:number,
	aspectRatio?:number,
	originalName?:string
}

export type ImageSharpFilterInput = {
		id?:StringQueryOperatorInput,
	fixed?:ImageSharpFixedFilterInput,
	resolutions?:ImageSharpResolutionsFilterInput,
	fluid?:ImageSharpFluidFilterInput,
	sizes?:ImageSharpSizesFilterInput,
	original?:ImageSharpOriginalFilterInput,
	resize?:ImageSharpResizeFilterInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput
}

export type ImageSharpSortInput = {
		fields?:(ImageSharpFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum ImageSharpFieldsEnum {
	id = "id",
	fixed___base64 = "fixed___base64",
	fixed___tracedSVG = "fixed___tracedSVG",
	fixed___aspectRatio = "fixed___aspectRatio",
	fixed___width = "fixed___width",
	fixed___height = "fixed___height",
	fixed___src = "fixed___src",
	fixed___srcSet = "fixed___srcSet",
	fixed___srcWebp = "fixed___srcWebp",
	fixed___srcSetWebp = "fixed___srcSetWebp",
	fixed___originalName = "fixed___originalName",
	resolutions___base64 = "resolutions___base64",
	resolutions___tracedSVG = "resolutions___tracedSVG",
	resolutions___aspectRatio = "resolutions___aspectRatio",
	resolutions___width = "resolutions___width",
	resolutions___height = "resolutions___height",
	resolutions___src = "resolutions___src",
	resolutions___srcSet = "resolutions___srcSet",
	resolutions___srcWebp = "resolutions___srcWebp",
	resolutions___srcSetWebp = "resolutions___srcSetWebp",
	resolutions___originalName = "resolutions___originalName",
	fluid___base64 = "fluid___base64",
	fluid___tracedSVG = "fluid___tracedSVG",
	fluid___aspectRatio = "fluid___aspectRatio",
	fluid___src = "fluid___src",
	fluid___srcSet = "fluid___srcSet",
	fluid___srcWebp = "fluid___srcWebp",
	fluid___srcSetWebp = "fluid___srcSetWebp",
	fluid___sizes = "fluid___sizes",
	fluid___originalImg = "fluid___originalImg",
	fluid___originalName = "fluid___originalName",
	fluid___presentationWidth = "fluid___presentationWidth",
	fluid___presentationHeight = "fluid___presentationHeight",
	sizes___base64 = "sizes___base64",
	sizes___tracedSVG = "sizes___tracedSVG",
	sizes___aspectRatio = "sizes___aspectRatio",
	sizes___src = "sizes___src",
	sizes___srcSet = "sizes___srcSet",
	sizes___srcWebp = "sizes___srcWebp",
	sizes___srcSetWebp = "sizes___srcSetWebp",
	sizes___sizes = "sizes___sizes",
	sizes___originalImg = "sizes___originalImg",
	sizes___originalName = "sizes___originalName",
	sizes___presentationWidth = "sizes___presentationWidth",
	sizes___presentationHeight = "sizes___presentationHeight",
	original___width = "original___width",
	original___height = "original___height",
	original___src = "original___src",
	resize___src = "resize___src",
	resize___tracedSVG = "resize___tracedSVG",
	resize___width = "resize___width",
	resize___height = "resize___height",
	resize___aspectRatio = "resize___aspectRatio",
	resize___originalName = "resize___originalName",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type"
}

export enum SortOrderEnum {
	ASC = "ASC",
	DESC = "DESC"
}

export type ImageSharpConnection = {
	__typename?: "ImageSharpConnection",
	totalCount:number,
	edges:ImageSharpEdge[],
	nodes:ImageSharp[],
	pageInfo:PageInfo,
	distinct:(props:{	field:ImageSharpFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ImageSharpFieldsEnum}) => ImageSharpGroupConnection[]
}

export type ImageSharpEdge = {
	__typename?: "ImageSharpEdge",
	next?:ImageSharp,
	node:ImageSharp,
	previous?:ImageSharp
}

export type PageInfo = {
	__typename?: "PageInfo",
	currentPage:number,
	hasPreviousPage:boolean,
	hasNextPage:boolean,
	itemCount:number,
	pageCount:number,
	perPage?:number
}

export type ImageSharpGroupConnection = {
	__typename?: "ImageSharpGroupConnection",
	totalCount:number,
	edges:ImageSharpEdge[],
	nodes:ImageSharp[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type DateQueryOperatorInput = {
		eq?:Date,
	ne?:Date,
	gt?:Date,
	gte?:Date,
	lt?:Date,
	lte?:Date,
	in?:(Date | undefined)[],
	nin?:(Date | undefined)[]
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
representation of dates and times using the Gregorian calendar. */
export type Date = any

export type MdxFilterInput = {
		rawBody?:StringQueryOperatorInput,
	fileAbsolutePath?:StringQueryOperatorInput,
	frontmatter?:MdxFrontmatterFilterInput,
	body?:StringQueryOperatorInput,
	excerpt?:StringQueryOperatorInput,
	headings?:MdxHeadingMdxFilterListInput,
	html?:StringQueryOperatorInput,
	mdxAST?:JSONQueryOperatorInput,
	tableOfContents?:JSONQueryOperatorInput,
	timeToRead?:IntQueryOperatorInput,
	wordCount?:MdxWordCountFilterInput,
	id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput
}

export type MdxFrontmatterFilterInput = {
		title?:StringQueryOperatorInput,
	author?:AuthorsYamlFilterInput,
	date?:DateQueryOperatorInput,
	hero?:FileFilterInput,
	excerpt?:StringQueryOperatorInput
}

export type AuthorsYamlFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	name?:StringQueryOperatorInput,
	bio?:StringQueryOperatorInput,
	avatar?:FileFilterInput,
	featured?:BooleanQueryOperatorInput,
	social?:AuthorsYamlSocialFilterListInput
}

export type FileFilterInput = {
		birthtime?:DateQueryOperatorInput,
	birthtimeMs?:FloatQueryOperatorInput,
	sourceInstanceName?:StringQueryOperatorInput,
	absolutePath?:StringQueryOperatorInput,
	relativePath?:StringQueryOperatorInput,
	extension?:StringQueryOperatorInput,
	size?:IntQueryOperatorInput,
	prettySize?:StringQueryOperatorInput,
	modifiedTime?:DateQueryOperatorInput,
	accessTime?:DateQueryOperatorInput,
	changeTime?:DateQueryOperatorInput,
	birthTime?:DateQueryOperatorInput,
	root?:StringQueryOperatorInput,
	dir?:StringQueryOperatorInput,
	base?:StringQueryOperatorInput,
	ext?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	relativeDirectory?:StringQueryOperatorInput,
	dev?:IntQueryOperatorInput,
	mode?:IntQueryOperatorInput,
	nlink?:IntQueryOperatorInput,
	uid?:IntQueryOperatorInput,
	gid?:IntQueryOperatorInput,
	rdev?:IntQueryOperatorInput,
	blksize?:IntQueryOperatorInput,
	ino?:IntQueryOperatorInput,
	blocks?:IntQueryOperatorInput,
	atimeMs?:FloatQueryOperatorInput,
	mtimeMs?:FloatQueryOperatorInput,
	ctimeMs?:FloatQueryOperatorInput,
	atime?:DateQueryOperatorInput,
	mtime?:DateQueryOperatorInput,
	ctime?:DateQueryOperatorInput,
	publicURL?:StringQueryOperatorInput,
	id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	childMdx?:MdxFilterInput,
	childImageSharp?:ImageSharpFilterInput,
	childrenAuthorsYaml?:AuthorsYamlFilterListInput
}

export type AuthorsYamlFilterListInput = {
		elemMatch?:AuthorsYamlFilterInput
}

export type AuthorsYamlSocialFilterListInput = {
		elemMatch?:AuthorsYamlSocialFilterInput
}

export type AuthorsYamlSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type MdxHeadingMdxFilterListInput = {
		elemMatch?:MdxHeadingMdxFilterInput
}

export type MdxHeadingMdxFilterInput = {
		value?:StringQueryOperatorInput,
	depth?:IntQueryOperatorInput
}

export type JSONQueryOperatorInput = {
		eq?:JSON,
	ne?:JSON,
	in?:(JSON | undefined)[],
	nin?:(JSON | undefined)[],
	regex?:JSON,
	glob?:JSON
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any

export type MdxWordCountFilterInput = {
		paragraphs?:IntQueryOperatorInput,
	sentences?:IntQueryOperatorInput,
	words?:IntQueryOperatorInput
}

export type File = {
	__typename?: "File",
	birthtime?:Date,
	birthtimeMs?:number,
	sourceInstanceName?:string,
	absolutePath?:string,
	relativePath?:string,
	extension?:string,
	size?:number,
	prettySize?:string,
	modifiedTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	accessTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	changeTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	birthTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	root?:string,
	dir?:string,
	base?:string,
	ext?:string,
	name?:string,
	relativeDirectory?:string,
	dev?:number,
	mode?:number,
	nlink?:number,
	uid?:number,
	gid?:number,
	rdev?:number,
	blksize?:number,
	ino?:number,
	blocks?:number,
	atimeMs?:number,
	mtimeMs?:number,
	ctimeMs?:number,
	atime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	mtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	ctime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	/** Copy file to static directory and return public url to it */
	publicURL?:string,
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	childMdx?:Mdx,
	childImageSharp?:ImageSharp,
	childrenAuthorsYaml?:(AuthorsYaml | undefined)[]
}

export type Mdx = {
	__typename?: "Mdx",
	rawBody:string,
	fileAbsolutePath:string,
	frontmatter?:MdxFrontmatter,
	body:string,
	excerpt:(props:{	pruneLength?:number}) => string,
	headings:(props:{	depth?:HeadingsMdx}) => (MdxHeadingMdx | undefined)[],
	html?:string,
	mdxAST?:JSON,
	tableOfContents:(props:{	maxDepth?:number}) => JSON,
	timeToRead?:number,
	wordCount?:MdxWordCount,
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal
}

export type MdxFrontmatter = {
	__typename?: "MdxFrontmatter",
	title:string,
	author?:AuthorsYaml,
	date:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	hero?:File,
	excerpt?:string
}

export type AuthorsYaml = {
	__typename?: "AuthorsYaml",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	name?:string,
	bio?:string,
	avatar?:File,
	featured?:boolean,
	social?:(AuthorsYamlSocial | undefined)[]
}

export type AuthorsYamlSocial = {
	__typename?: "AuthorsYamlSocial",
	name?:string,
	url?:string
}

export enum HeadingsMdx {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6"
}

export type MdxHeadingMdx = {
	__typename?: "MdxHeadingMdx",
	value?:string,
	depth?:number
}

export type MdxWordCount = {
	__typename?: "MdxWordCount",
	paragraphs?:number,
	sentences?:number,
	words?:number
}

export type FileSortInput = {
		fields?:(FileFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum FileFieldsEnum {
	birthtime = "birthtime",
	birthtimeMs = "birthtimeMs",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	publicURL = "publicURL",
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	childMdx___rawBody = "childMdx___rawBody",
	childMdx___fileAbsolutePath = "childMdx___fileAbsolutePath",
	childMdx___frontmatter___title = "childMdx___frontmatter___title",
	childMdx___frontmatter___author___id = "childMdx___frontmatter___author___id",
	childMdx___frontmatter___author___children = "childMdx___frontmatter___author___children",
	childMdx___frontmatter___author___name = "childMdx___frontmatter___author___name",
	childMdx___frontmatter___author___bio = "childMdx___frontmatter___author___bio",
	childMdx___frontmatter___author___featured = "childMdx___frontmatter___author___featured",
	childMdx___frontmatter___author___social = "childMdx___frontmatter___author___social",
	childMdx___frontmatter___date = "childMdx___frontmatter___date",
	childMdx___frontmatter___hero___birthtime = "childMdx___frontmatter___hero___birthtime",
	childMdx___frontmatter___hero___birthtimeMs = "childMdx___frontmatter___hero___birthtimeMs",
	childMdx___frontmatter___hero___sourceInstanceName = "childMdx___frontmatter___hero___sourceInstanceName",
	childMdx___frontmatter___hero___absolutePath = "childMdx___frontmatter___hero___absolutePath",
	childMdx___frontmatter___hero___relativePath = "childMdx___frontmatter___hero___relativePath",
	childMdx___frontmatter___hero___extension = "childMdx___frontmatter___hero___extension",
	childMdx___frontmatter___hero___size = "childMdx___frontmatter___hero___size",
	childMdx___frontmatter___hero___prettySize = "childMdx___frontmatter___hero___prettySize",
	childMdx___frontmatter___hero___modifiedTime = "childMdx___frontmatter___hero___modifiedTime",
	childMdx___frontmatter___hero___accessTime = "childMdx___frontmatter___hero___accessTime",
	childMdx___frontmatter___hero___changeTime = "childMdx___frontmatter___hero___changeTime",
	childMdx___frontmatter___hero___birthTime = "childMdx___frontmatter___hero___birthTime",
	childMdx___frontmatter___hero___root = "childMdx___frontmatter___hero___root",
	childMdx___frontmatter___hero___dir = "childMdx___frontmatter___hero___dir",
	childMdx___frontmatter___hero___base = "childMdx___frontmatter___hero___base",
	childMdx___frontmatter___hero___ext = "childMdx___frontmatter___hero___ext",
	childMdx___frontmatter___hero___name = "childMdx___frontmatter___hero___name",
	childMdx___frontmatter___hero___relativeDirectory = "childMdx___frontmatter___hero___relativeDirectory",
	childMdx___frontmatter___hero___dev = "childMdx___frontmatter___hero___dev",
	childMdx___frontmatter___hero___mode = "childMdx___frontmatter___hero___mode",
	childMdx___frontmatter___hero___nlink = "childMdx___frontmatter___hero___nlink",
	childMdx___frontmatter___hero___uid = "childMdx___frontmatter___hero___uid",
	childMdx___frontmatter___hero___gid = "childMdx___frontmatter___hero___gid",
	childMdx___frontmatter___hero___rdev = "childMdx___frontmatter___hero___rdev",
	childMdx___frontmatter___hero___blksize = "childMdx___frontmatter___hero___blksize",
	childMdx___frontmatter___hero___ino = "childMdx___frontmatter___hero___ino",
	childMdx___frontmatter___hero___blocks = "childMdx___frontmatter___hero___blocks",
	childMdx___frontmatter___hero___atimeMs = "childMdx___frontmatter___hero___atimeMs",
	childMdx___frontmatter___hero___mtimeMs = "childMdx___frontmatter___hero___mtimeMs",
	childMdx___frontmatter___hero___ctimeMs = "childMdx___frontmatter___hero___ctimeMs",
	childMdx___frontmatter___hero___atime = "childMdx___frontmatter___hero___atime",
	childMdx___frontmatter___hero___mtime = "childMdx___frontmatter___hero___mtime",
	childMdx___frontmatter___hero___ctime = "childMdx___frontmatter___hero___ctime",
	childMdx___frontmatter___hero___publicURL = "childMdx___frontmatter___hero___publicURL",
	childMdx___frontmatter___hero___id = "childMdx___frontmatter___hero___id",
	childMdx___frontmatter___hero___children = "childMdx___frontmatter___hero___children",
	childMdx___frontmatter___hero___childrenAuthorsYaml = "childMdx___frontmatter___hero___childrenAuthorsYaml",
	childMdx___frontmatter___excerpt = "childMdx___frontmatter___excerpt",
	childMdx___body = "childMdx___body",
	childMdx___excerpt = "childMdx___excerpt",
	childMdx___headings = "childMdx___headings",
	childMdx___headings___value = "childMdx___headings___value",
	childMdx___headings___depth = "childMdx___headings___depth",
	childMdx___html = "childMdx___html",
	childMdx___mdxAST = "childMdx___mdxAST",
	childMdx___tableOfContents = "childMdx___tableOfContents",
	childMdx___timeToRead = "childMdx___timeToRead",
	childMdx___wordCount___paragraphs = "childMdx___wordCount___paragraphs",
	childMdx___wordCount___sentences = "childMdx___wordCount___sentences",
	childMdx___wordCount___words = "childMdx___wordCount___words",
	childMdx___id = "childMdx___id",
	childMdx___parent___id = "childMdx___parent___id",
	childMdx___parent___parent___id = "childMdx___parent___parent___id",
	childMdx___parent___parent___children = "childMdx___parent___parent___children",
	childMdx___parent___children = "childMdx___parent___children",
	childMdx___parent___children___id = "childMdx___parent___children___id",
	childMdx___parent___children___children = "childMdx___parent___children___children",
	childMdx___parent___internal___content = "childMdx___parent___internal___content",
	childMdx___parent___internal___contentDigest = "childMdx___parent___internal___contentDigest",
	childMdx___parent___internal___description = "childMdx___parent___internal___description",
	childMdx___parent___internal___fieldOwners = "childMdx___parent___internal___fieldOwners",
	childMdx___parent___internal___ignoreType = "childMdx___parent___internal___ignoreType",
	childMdx___parent___internal___mediaType = "childMdx___parent___internal___mediaType",
	childMdx___parent___internal___owner = "childMdx___parent___internal___owner",
	childMdx___parent___internal___type = "childMdx___parent___internal___type",
	childMdx___children = "childMdx___children",
	childMdx___children___id = "childMdx___children___id",
	childMdx___children___parent___id = "childMdx___children___parent___id",
	childMdx___children___parent___children = "childMdx___children___parent___children",
	childMdx___children___children = "childMdx___children___children",
	childMdx___children___children___id = "childMdx___children___children___id",
	childMdx___children___children___children = "childMdx___children___children___children",
	childMdx___children___internal___content = "childMdx___children___internal___content",
	childMdx___children___internal___contentDigest = "childMdx___children___internal___contentDigest",
	childMdx___children___internal___description = "childMdx___children___internal___description",
	childMdx___children___internal___fieldOwners = "childMdx___children___internal___fieldOwners",
	childMdx___children___internal___ignoreType = "childMdx___children___internal___ignoreType",
	childMdx___children___internal___mediaType = "childMdx___children___internal___mediaType",
	childMdx___children___internal___owner = "childMdx___children___internal___owner",
	childMdx___children___internal___type = "childMdx___children___internal___type",
	childMdx___internal___content = "childMdx___internal___content",
	childMdx___internal___contentDigest = "childMdx___internal___contentDigest",
	childMdx___internal___description = "childMdx___internal___description",
	childMdx___internal___fieldOwners = "childMdx___internal___fieldOwners",
	childMdx___internal___ignoreType = "childMdx___internal___ignoreType",
	childMdx___internal___mediaType = "childMdx___internal___mediaType",
	childMdx___internal___owner = "childMdx___internal___owner",
	childMdx___internal___type = "childMdx___internal___type",
	childImageSharp___id = "childImageSharp___id",
	childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
	childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
	childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
	childImageSharp___fixed___width = "childImageSharp___fixed___width",
	childImageSharp___fixed___height = "childImageSharp___fixed___height",
	childImageSharp___fixed___src = "childImageSharp___fixed___src",
	childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
	childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
	childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
	childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
	childImageSharp___resolutions___base64 = "childImageSharp___resolutions___base64",
	childImageSharp___resolutions___tracedSVG = "childImageSharp___resolutions___tracedSVG",
	childImageSharp___resolutions___aspectRatio = "childImageSharp___resolutions___aspectRatio",
	childImageSharp___resolutions___width = "childImageSharp___resolutions___width",
	childImageSharp___resolutions___height = "childImageSharp___resolutions___height",
	childImageSharp___resolutions___src = "childImageSharp___resolutions___src",
	childImageSharp___resolutions___srcSet = "childImageSharp___resolutions___srcSet",
	childImageSharp___resolutions___srcWebp = "childImageSharp___resolutions___srcWebp",
	childImageSharp___resolutions___srcSetWebp = "childImageSharp___resolutions___srcSetWebp",
	childImageSharp___resolutions___originalName = "childImageSharp___resolutions___originalName",
	childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
	childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
	childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
	childImageSharp___fluid___src = "childImageSharp___fluid___src",
	childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
	childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
	childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
	childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
	childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
	childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
	childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
	childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
	childImageSharp___sizes___base64 = "childImageSharp___sizes___base64",
	childImageSharp___sizes___tracedSVG = "childImageSharp___sizes___tracedSVG",
	childImageSharp___sizes___aspectRatio = "childImageSharp___sizes___aspectRatio",
	childImageSharp___sizes___src = "childImageSharp___sizes___src",
	childImageSharp___sizes___srcSet = "childImageSharp___sizes___srcSet",
	childImageSharp___sizes___srcWebp = "childImageSharp___sizes___srcWebp",
	childImageSharp___sizes___srcSetWebp = "childImageSharp___sizes___srcSetWebp",
	childImageSharp___sizes___sizes = "childImageSharp___sizes___sizes",
	childImageSharp___sizes___originalImg = "childImageSharp___sizes___originalImg",
	childImageSharp___sizes___originalName = "childImageSharp___sizes___originalName",
	childImageSharp___sizes___presentationWidth = "childImageSharp___sizes___presentationWidth",
	childImageSharp___sizes___presentationHeight = "childImageSharp___sizes___presentationHeight",
	childImageSharp___original___width = "childImageSharp___original___width",
	childImageSharp___original___height = "childImageSharp___original___height",
	childImageSharp___original___src = "childImageSharp___original___src",
	childImageSharp___resize___src = "childImageSharp___resize___src",
	childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
	childImageSharp___resize___width = "childImageSharp___resize___width",
	childImageSharp___resize___height = "childImageSharp___resize___height",
	childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
	childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
	childImageSharp___parent___id = "childImageSharp___parent___id",
	childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
	childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
	childImageSharp___parent___children = "childImageSharp___parent___children",
	childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
	childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
	childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
	childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
	childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
	childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
	childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
	childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
	childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
	childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
	childImageSharp___children = "childImageSharp___children",
	childImageSharp___children___id = "childImageSharp___children___id",
	childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
	childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
	childImageSharp___children___children = "childImageSharp___children___children",
	childImageSharp___children___children___id = "childImageSharp___children___children___id",
	childImageSharp___children___children___children = "childImageSharp___children___children___children",
	childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
	childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
	childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
	childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
	childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
	childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
	childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
	childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
	childImageSharp___internal___content = "childImageSharp___internal___content",
	childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
	childImageSharp___internal___description = "childImageSharp___internal___description",
	childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
	childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
	childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
	childImageSharp___internal___owner = "childImageSharp___internal___owner",
	childImageSharp___internal___type = "childImageSharp___internal___type",
	childrenAuthorsYaml = "childrenAuthorsYaml",
	childrenAuthorsYaml___id = "childrenAuthorsYaml___id",
	childrenAuthorsYaml___parent___id = "childrenAuthorsYaml___parent___id",
	childrenAuthorsYaml___parent___parent___id = "childrenAuthorsYaml___parent___parent___id",
	childrenAuthorsYaml___parent___parent___children = "childrenAuthorsYaml___parent___parent___children",
	childrenAuthorsYaml___parent___children = "childrenAuthorsYaml___parent___children",
	childrenAuthorsYaml___parent___children___id = "childrenAuthorsYaml___parent___children___id",
	childrenAuthorsYaml___parent___children___children = "childrenAuthorsYaml___parent___children___children",
	childrenAuthorsYaml___parent___internal___content = "childrenAuthorsYaml___parent___internal___content",
	childrenAuthorsYaml___parent___internal___contentDigest = "childrenAuthorsYaml___parent___internal___contentDigest",
	childrenAuthorsYaml___parent___internal___description = "childrenAuthorsYaml___parent___internal___description",
	childrenAuthorsYaml___parent___internal___fieldOwners = "childrenAuthorsYaml___parent___internal___fieldOwners",
	childrenAuthorsYaml___parent___internal___ignoreType = "childrenAuthorsYaml___parent___internal___ignoreType",
	childrenAuthorsYaml___parent___internal___mediaType = "childrenAuthorsYaml___parent___internal___mediaType",
	childrenAuthorsYaml___parent___internal___owner = "childrenAuthorsYaml___parent___internal___owner",
	childrenAuthorsYaml___parent___internal___type = "childrenAuthorsYaml___parent___internal___type",
	childrenAuthorsYaml___children = "childrenAuthorsYaml___children",
	childrenAuthorsYaml___children___id = "childrenAuthorsYaml___children___id",
	childrenAuthorsYaml___children___parent___id = "childrenAuthorsYaml___children___parent___id",
	childrenAuthorsYaml___children___parent___children = "childrenAuthorsYaml___children___parent___children",
	childrenAuthorsYaml___children___children = "childrenAuthorsYaml___children___children",
	childrenAuthorsYaml___children___children___id = "childrenAuthorsYaml___children___children___id",
	childrenAuthorsYaml___children___children___children = "childrenAuthorsYaml___children___children___children",
	childrenAuthorsYaml___children___internal___content = "childrenAuthorsYaml___children___internal___content",
	childrenAuthorsYaml___children___internal___contentDigest = "childrenAuthorsYaml___children___internal___contentDigest",
	childrenAuthorsYaml___children___internal___description = "childrenAuthorsYaml___children___internal___description",
	childrenAuthorsYaml___children___internal___fieldOwners = "childrenAuthorsYaml___children___internal___fieldOwners",
	childrenAuthorsYaml___children___internal___ignoreType = "childrenAuthorsYaml___children___internal___ignoreType",
	childrenAuthorsYaml___children___internal___mediaType = "childrenAuthorsYaml___children___internal___mediaType",
	childrenAuthorsYaml___children___internal___owner = "childrenAuthorsYaml___children___internal___owner",
	childrenAuthorsYaml___children___internal___type = "childrenAuthorsYaml___children___internal___type",
	childrenAuthorsYaml___internal___content = "childrenAuthorsYaml___internal___content",
	childrenAuthorsYaml___internal___contentDigest = "childrenAuthorsYaml___internal___contentDigest",
	childrenAuthorsYaml___internal___description = "childrenAuthorsYaml___internal___description",
	childrenAuthorsYaml___internal___fieldOwners = "childrenAuthorsYaml___internal___fieldOwners",
	childrenAuthorsYaml___internal___ignoreType = "childrenAuthorsYaml___internal___ignoreType",
	childrenAuthorsYaml___internal___mediaType = "childrenAuthorsYaml___internal___mediaType",
	childrenAuthorsYaml___internal___owner = "childrenAuthorsYaml___internal___owner",
	childrenAuthorsYaml___internal___type = "childrenAuthorsYaml___internal___type",
	childrenAuthorsYaml___name = "childrenAuthorsYaml___name",
	childrenAuthorsYaml___bio = "childrenAuthorsYaml___bio",
	childrenAuthorsYaml___avatar___birthtime = "childrenAuthorsYaml___avatar___birthtime",
	childrenAuthorsYaml___avatar___birthtimeMs = "childrenAuthorsYaml___avatar___birthtimeMs",
	childrenAuthorsYaml___avatar___sourceInstanceName = "childrenAuthorsYaml___avatar___sourceInstanceName",
	childrenAuthorsYaml___avatar___absolutePath = "childrenAuthorsYaml___avatar___absolutePath",
	childrenAuthorsYaml___avatar___relativePath = "childrenAuthorsYaml___avatar___relativePath",
	childrenAuthorsYaml___avatar___extension = "childrenAuthorsYaml___avatar___extension",
	childrenAuthorsYaml___avatar___size = "childrenAuthorsYaml___avatar___size",
	childrenAuthorsYaml___avatar___prettySize = "childrenAuthorsYaml___avatar___prettySize",
	childrenAuthorsYaml___avatar___modifiedTime = "childrenAuthorsYaml___avatar___modifiedTime",
	childrenAuthorsYaml___avatar___accessTime = "childrenAuthorsYaml___avatar___accessTime",
	childrenAuthorsYaml___avatar___changeTime = "childrenAuthorsYaml___avatar___changeTime",
	childrenAuthorsYaml___avatar___birthTime = "childrenAuthorsYaml___avatar___birthTime",
	childrenAuthorsYaml___avatar___root = "childrenAuthorsYaml___avatar___root",
	childrenAuthorsYaml___avatar___dir = "childrenAuthorsYaml___avatar___dir",
	childrenAuthorsYaml___avatar___base = "childrenAuthorsYaml___avatar___base",
	childrenAuthorsYaml___avatar___ext = "childrenAuthorsYaml___avatar___ext",
	childrenAuthorsYaml___avatar___name = "childrenAuthorsYaml___avatar___name",
	childrenAuthorsYaml___avatar___relativeDirectory = "childrenAuthorsYaml___avatar___relativeDirectory",
	childrenAuthorsYaml___avatar___dev = "childrenAuthorsYaml___avatar___dev",
	childrenAuthorsYaml___avatar___mode = "childrenAuthorsYaml___avatar___mode",
	childrenAuthorsYaml___avatar___nlink = "childrenAuthorsYaml___avatar___nlink",
	childrenAuthorsYaml___avatar___uid = "childrenAuthorsYaml___avatar___uid",
	childrenAuthorsYaml___avatar___gid = "childrenAuthorsYaml___avatar___gid",
	childrenAuthorsYaml___avatar___rdev = "childrenAuthorsYaml___avatar___rdev",
	childrenAuthorsYaml___avatar___blksize = "childrenAuthorsYaml___avatar___blksize",
	childrenAuthorsYaml___avatar___ino = "childrenAuthorsYaml___avatar___ino",
	childrenAuthorsYaml___avatar___blocks = "childrenAuthorsYaml___avatar___blocks",
	childrenAuthorsYaml___avatar___atimeMs = "childrenAuthorsYaml___avatar___atimeMs",
	childrenAuthorsYaml___avatar___mtimeMs = "childrenAuthorsYaml___avatar___mtimeMs",
	childrenAuthorsYaml___avatar___ctimeMs = "childrenAuthorsYaml___avatar___ctimeMs",
	childrenAuthorsYaml___avatar___atime = "childrenAuthorsYaml___avatar___atime",
	childrenAuthorsYaml___avatar___mtime = "childrenAuthorsYaml___avatar___mtime",
	childrenAuthorsYaml___avatar___ctime = "childrenAuthorsYaml___avatar___ctime",
	childrenAuthorsYaml___avatar___publicURL = "childrenAuthorsYaml___avatar___publicURL",
	childrenAuthorsYaml___avatar___id = "childrenAuthorsYaml___avatar___id",
	childrenAuthorsYaml___avatar___parent___id = "childrenAuthorsYaml___avatar___parent___id",
	childrenAuthorsYaml___avatar___parent___children = "childrenAuthorsYaml___avatar___parent___children",
	childrenAuthorsYaml___avatar___children = "childrenAuthorsYaml___avatar___children",
	childrenAuthorsYaml___avatar___children___id = "childrenAuthorsYaml___avatar___children___id",
	childrenAuthorsYaml___avatar___children___children = "childrenAuthorsYaml___avatar___children___children",
	childrenAuthorsYaml___avatar___internal___content = "childrenAuthorsYaml___avatar___internal___content",
	childrenAuthorsYaml___avatar___internal___contentDigest = "childrenAuthorsYaml___avatar___internal___contentDigest",
	childrenAuthorsYaml___avatar___internal___description = "childrenAuthorsYaml___avatar___internal___description",
	childrenAuthorsYaml___avatar___internal___fieldOwners = "childrenAuthorsYaml___avatar___internal___fieldOwners",
	childrenAuthorsYaml___avatar___internal___ignoreType = "childrenAuthorsYaml___avatar___internal___ignoreType",
	childrenAuthorsYaml___avatar___internal___mediaType = "childrenAuthorsYaml___avatar___internal___mediaType",
	childrenAuthorsYaml___avatar___internal___owner = "childrenAuthorsYaml___avatar___internal___owner",
	childrenAuthorsYaml___avatar___internal___type = "childrenAuthorsYaml___avatar___internal___type",
	childrenAuthorsYaml___avatar___childMdx___rawBody = "childrenAuthorsYaml___avatar___childMdx___rawBody",
	childrenAuthorsYaml___avatar___childMdx___fileAbsolutePath = "childrenAuthorsYaml___avatar___childMdx___fileAbsolutePath",
	childrenAuthorsYaml___avatar___childMdx___body = "childrenAuthorsYaml___avatar___childMdx___body",
	childrenAuthorsYaml___avatar___childMdx___excerpt = "childrenAuthorsYaml___avatar___childMdx___excerpt",
	childrenAuthorsYaml___avatar___childMdx___headings = "childrenAuthorsYaml___avatar___childMdx___headings",
	childrenAuthorsYaml___avatar___childMdx___html = "childrenAuthorsYaml___avatar___childMdx___html",
	childrenAuthorsYaml___avatar___childMdx___mdxAST = "childrenAuthorsYaml___avatar___childMdx___mdxAST",
	childrenAuthorsYaml___avatar___childMdx___tableOfContents = "childrenAuthorsYaml___avatar___childMdx___tableOfContents",
	childrenAuthorsYaml___avatar___childMdx___timeToRead = "childrenAuthorsYaml___avatar___childMdx___timeToRead",
	childrenAuthorsYaml___avatar___childMdx___id = "childrenAuthorsYaml___avatar___childMdx___id",
	childrenAuthorsYaml___avatar___childMdx___children = "childrenAuthorsYaml___avatar___childMdx___children",
	childrenAuthorsYaml___avatar___childImageSharp___id = "childrenAuthorsYaml___avatar___childImageSharp___id",
	childrenAuthorsYaml___avatar___childImageSharp___children = "childrenAuthorsYaml___avatar___childImageSharp___children",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml = "childrenAuthorsYaml___avatar___childrenAuthorsYaml",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___id = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___id",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___children = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___children",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___name = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___name",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___bio = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___bio",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___featured = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___featured",
	childrenAuthorsYaml___avatar___childrenAuthorsYaml___social = "childrenAuthorsYaml___avatar___childrenAuthorsYaml___social",
	childrenAuthorsYaml___featured = "childrenAuthorsYaml___featured",
	childrenAuthorsYaml___social = "childrenAuthorsYaml___social",
	childrenAuthorsYaml___social___name = "childrenAuthorsYaml___social___name",
	childrenAuthorsYaml___social___url = "childrenAuthorsYaml___social___url"
}

export type FileConnection = {
	__typename?: "FileConnection",
	totalCount:number,
	edges:FileEdge[],
	nodes:File[],
	pageInfo:PageInfo,
	distinct:(props:{	field:FileFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:FileFieldsEnum}) => FileGroupConnection[]
}

export type FileEdge = {
	__typename?: "FileEdge",
	next?:File,
	node:File,
	previous?:File
}

export type FileGroupConnection = {
	__typename?: "FileGroupConnection",
	totalCount:number,
	edges:FileEdge[],
	nodes:File[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type MdxSortInput = {
		fields?:(MdxFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum MdxFieldsEnum {
	rawBody = "rawBody",
	fileAbsolutePath = "fileAbsolutePath",
	frontmatter___title = "frontmatter___title",
	frontmatter___author___id = "frontmatter___author___id",
	frontmatter___author___parent___id = "frontmatter___author___parent___id",
	frontmatter___author___parent___children = "frontmatter___author___parent___children",
	frontmatter___author___children = "frontmatter___author___children",
	frontmatter___author___children___id = "frontmatter___author___children___id",
	frontmatter___author___children___children = "frontmatter___author___children___children",
	frontmatter___author___internal___content = "frontmatter___author___internal___content",
	frontmatter___author___internal___contentDigest = "frontmatter___author___internal___contentDigest",
	frontmatter___author___internal___description = "frontmatter___author___internal___description",
	frontmatter___author___internal___fieldOwners = "frontmatter___author___internal___fieldOwners",
	frontmatter___author___internal___ignoreType = "frontmatter___author___internal___ignoreType",
	frontmatter___author___internal___mediaType = "frontmatter___author___internal___mediaType",
	frontmatter___author___internal___owner = "frontmatter___author___internal___owner",
	frontmatter___author___internal___type = "frontmatter___author___internal___type",
	frontmatter___author___name = "frontmatter___author___name",
	frontmatter___author___bio = "frontmatter___author___bio",
	frontmatter___author___avatar___birthtime = "frontmatter___author___avatar___birthtime",
	frontmatter___author___avatar___birthtimeMs = "frontmatter___author___avatar___birthtimeMs",
	frontmatter___author___avatar___sourceInstanceName = "frontmatter___author___avatar___sourceInstanceName",
	frontmatter___author___avatar___absolutePath = "frontmatter___author___avatar___absolutePath",
	frontmatter___author___avatar___relativePath = "frontmatter___author___avatar___relativePath",
	frontmatter___author___avatar___extension = "frontmatter___author___avatar___extension",
	frontmatter___author___avatar___size = "frontmatter___author___avatar___size",
	frontmatter___author___avatar___prettySize = "frontmatter___author___avatar___prettySize",
	frontmatter___author___avatar___modifiedTime = "frontmatter___author___avatar___modifiedTime",
	frontmatter___author___avatar___accessTime = "frontmatter___author___avatar___accessTime",
	frontmatter___author___avatar___changeTime = "frontmatter___author___avatar___changeTime",
	frontmatter___author___avatar___birthTime = "frontmatter___author___avatar___birthTime",
	frontmatter___author___avatar___root = "frontmatter___author___avatar___root",
	frontmatter___author___avatar___dir = "frontmatter___author___avatar___dir",
	frontmatter___author___avatar___base = "frontmatter___author___avatar___base",
	frontmatter___author___avatar___ext = "frontmatter___author___avatar___ext",
	frontmatter___author___avatar___name = "frontmatter___author___avatar___name",
	frontmatter___author___avatar___relativeDirectory = "frontmatter___author___avatar___relativeDirectory",
	frontmatter___author___avatar___dev = "frontmatter___author___avatar___dev",
	frontmatter___author___avatar___mode = "frontmatter___author___avatar___mode",
	frontmatter___author___avatar___nlink = "frontmatter___author___avatar___nlink",
	frontmatter___author___avatar___uid = "frontmatter___author___avatar___uid",
	frontmatter___author___avatar___gid = "frontmatter___author___avatar___gid",
	frontmatter___author___avatar___rdev = "frontmatter___author___avatar___rdev",
	frontmatter___author___avatar___blksize = "frontmatter___author___avatar___blksize",
	frontmatter___author___avatar___ino = "frontmatter___author___avatar___ino",
	frontmatter___author___avatar___blocks = "frontmatter___author___avatar___blocks",
	frontmatter___author___avatar___atimeMs = "frontmatter___author___avatar___atimeMs",
	frontmatter___author___avatar___mtimeMs = "frontmatter___author___avatar___mtimeMs",
	frontmatter___author___avatar___ctimeMs = "frontmatter___author___avatar___ctimeMs",
	frontmatter___author___avatar___atime = "frontmatter___author___avatar___atime",
	frontmatter___author___avatar___mtime = "frontmatter___author___avatar___mtime",
	frontmatter___author___avatar___ctime = "frontmatter___author___avatar___ctime",
	frontmatter___author___avatar___publicURL = "frontmatter___author___avatar___publicURL",
	frontmatter___author___avatar___id = "frontmatter___author___avatar___id",
	frontmatter___author___avatar___children = "frontmatter___author___avatar___children",
	frontmatter___author___avatar___childrenAuthorsYaml = "frontmatter___author___avatar___childrenAuthorsYaml",
	frontmatter___author___featured = "frontmatter___author___featured",
	frontmatter___author___social = "frontmatter___author___social",
	frontmatter___author___social___name = "frontmatter___author___social___name",
	frontmatter___author___social___url = "frontmatter___author___social___url",
	frontmatter___date = "frontmatter___date",
	frontmatter___hero___birthtime = "frontmatter___hero___birthtime",
	frontmatter___hero___birthtimeMs = "frontmatter___hero___birthtimeMs",
	frontmatter___hero___sourceInstanceName = "frontmatter___hero___sourceInstanceName",
	frontmatter___hero___absolutePath = "frontmatter___hero___absolutePath",
	frontmatter___hero___relativePath = "frontmatter___hero___relativePath",
	frontmatter___hero___extension = "frontmatter___hero___extension",
	frontmatter___hero___size = "frontmatter___hero___size",
	frontmatter___hero___prettySize = "frontmatter___hero___prettySize",
	frontmatter___hero___modifiedTime = "frontmatter___hero___modifiedTime",
	frontmatter___hero___accessTime = "frontmatter___hero___accessTime",
	frontmatter___hero___changeTime = "frontmatter___hero___changeTime",
	frontmatter___hero___birthTime = "frontmatter___hero___birthTime",
	frontmatter___hero___root = "frontmatter___hero___root",
	frontmatter___hero___dir = "frontmatter___hero___dir",
	frontmatter___hero___base = "frontmatter___hero___base",
	frontmatter___hero___ext = "frontmatter___hero___ext",
	frontmatter___hero___name = "frontmatter___hero___name",
	frontmatter___hero___relativeDirectory = "frontmatter___hero___relativeDirectory",
	frontmatter___hero___dev = "frontmatter___hero___dev",
	frontmatter___hero___mode = "frontmatter___hero___mode",
	frontmatter___hero___nlink = "frontmatter___hero___nlink",
	frontmatter___hero___uid = "frontmatter___hero___uid",
	frontmatter___hero___gid = "frontmatter___hero___gid",
	frontmatter___hero___rdev = "frontmatter___hero___rdev",
	frontmatter___hero___blksize = "frontmatter___hero___blksize",
	frontmatter___hero___ino = "frontmatter___hero___ino",
	frontmatter___hero___blocks = "frontmatter___hero___blocks",
	frontmatter___hero___atimeMs = "frontmatter___hero___atimeMs",
	frontmatter___hero___mtimeMs = "frontmatter___hero___mtimeMs",
	frontmatter___hero___ctimeMs = "frontmatter___hero___ctimeMs",
	frontmatter___hero___atime = "frontmatter___hero___atime",
	frontmatter___hero___mtime = "frontmatter___hero___mtime",
	frontmatter___hero___ctime = "frontmatter___hero___ctime",
	frontmatter___hero___publicURL = "frontmatter___hero___publicURL",
	frontmatter___hero___id = "frontmatter___hero___id",
	frontmatter___hero___parent___id = "frontmatter___hero___parent___id",
	frontmatter___hero___parent___children = "frontmatter___hero___parent___children",
	frontmatter___hero___children = "frontmatter___hero___children",
	frontmatter___hero___children___id = "frontmatter___hero___children___id",
	frontmatter___hero___children___children = "frontmatter___hero___children___children",
	frontmatter___hero___internal___content = "frontmatter___hero___internal___content",
	frontmatter___hero___internal___contentDigest = "frontmatter___hero___internal___contentDigest",
	frontmatter___hero___internal___description = "frontmatter___hero___internal___description",
	frontmatter___hero___internal___fieldOwners = "frontmatter___hero___internal___fieldOwners",
	frontmatter___hero___internal___ignoreType = "frontmatter___hero___internal___ignoreType",
	frontmatter___hero___internal___mediaType = "frontmatter___hero___internal___mediaType",
	frontmatter___hero___internal___owner = "frontmatter___hero___internal___owner",
	frontmatter___hero___internal___type = "frontmatter___hero___internal___type",
	frontmatter___hero___childMdx___rawBody = "frontmatter___hero___childMdx___rawBody",
	frontmatter___hero___childMdx___fileAbsolutePath = "frontmatter___hero___childMdx___fileAbsolutePath",
	frontmatter___hero___childMdx___body = "frontmatter___hero___childMdx___body",
	frontmatter___hero___childMdx___excerpt = "frontmatter___hero___childMdx___excerpt",
	frontmatter___hero___childMdx___headings = "frontmatter___hero___childMdx___headings",
	frontmatter___hero___childMdx___html = "frontmatter___hero___childMdx___html",
	frontmatter___hero___childMdx___mdxAST = "frontmatter___hero___childMdx___mdxAST",
	frontmatter___hero___childMdx___tableOfContents = "frontmatter___hero___childMdx___tableOfContents",
	frontmatter___hero___childMdx___timeToRead = "frontmatter___hero___childMdx___timeToRead",
	frontmatter___hero___childMdx___id = "frontmatter___hero___childMdx___id",
	frontmatter___hero___childMdx___children = "frontmatter___hero___childMdx___children",
	frontmatter___hero___childImageSharp___id = "frontmatter___hero___childImageSharp___id",
	frontmatter___hero___childImageSharp___children = "frontmatter___hero___childImageSharp___children",
	frontmatter___hero___childrenAuthorsYaml = "frontmatter___hero___childrenAuthorsYaml",
	frontmatter___hero___childrenAuthorsYaml___id = "frontmatter___hero___childrenAuthorsYaml___id",
	frontmatter___hero___childrenAuthorsYaml___children = "frontmatter___hero___childrenAuthorsYaml___children",
	frontmatter___hero___childrenAuthorsYaml___name = "frontmatter___hero___childrenAuthorsYaml___name",
	frontmatter___hero___childrenAuthorsYaml___bio = "frontmatter___hero___childrenAuthorsYaml___bio",
	frontmatter___hero___childrenAuthorsYaml___featured = "frontmatter___hero___childrenAuthorsYaml___featured",
	frontmatter___hero___childrenAuthorsYaml___social = "frontmatter___hero___childrenAuthorsYaml___social",
	frontmatter___excerpt = "frontmatter___excerpt",
	body = "body",
	excerpt = "excerpt",
	headings = "headings",
	headings___value = "headings___value",
	headings___depth = "headings___depth",
	html = "html",
	mdxAST = "mdxAST",
	tableOfContents = "tableOfContents",
	timeToRead = "timeToRead",
	wordCount___paragraphs = "wordCount___paragraphs",
	wordCount___sentences = "wordCount___sentences",
	wordCount___words = "wordCount___words",
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type"
}

export type MdxConnection = {
	__typename?: "MdxConnection",
	totalCount:number,
	edges:MdxEdge[],
	nodes:Mdx[],
	pageInfo:PageInfo,
	distinct:(props:{	field:MdxFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:MdxFieldsEnum}) => MdxGroupConnection[]
}

export type MdxEdge = {
	__typename?: "MdxEdge",
	next?:Mdx,
	node:Mdx,
	previous?:Mdx
}

export type MdxGroupConnection = {
	__typename?: "MdxGroupConnection",
	totalCount:number,
	edges:MdxEdge[],
	nodes:Mdx[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type Article = {
	__typename?: "Article",
	id:string,
	slug:string,
	title:string,
	date:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	author:string,
	excerpt:(props:{	pruneLength?:number}) => string,
	body:string,
	hero?:File,
	timeToRead?:number,
	parent?:Node,
	children:Node[],
	internal:Internal
}

export type ArticleFilterInput = {
		id?:StringQueryOperatorInput,
	slug?:StringQueryOperatorInput,
	title?:StringQueryOperatorInput,
	date?:DateQueryOperatorInput,
	author?:StringQueryOperatorInput,
	excerpt?:StringQueryOperatorInput,
	body?:StringQueryOperatorInput,
	hero?:FileFilterInput,
	timeToRead?:IntQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput
}

export type ArticleSortInput = {
		fields?:(ArticleFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum ArticleFieldsEnum {
	id = "id",
	slug = "slug",
	title = "title",
	date = "date",
	author = "author",
	excerpt = "excerpt",
	body = "body",
	hero___birthtime = "hero___birthtime",
	hero___birthtimeMs = "hero___birthtimeMs",
	hero___sourceInstanceName = "hero___sourceInstanceName",
	hero___absolutePath = "hero___absolutePath",
	hero___relativePath = "hero___relativePath",
	hero___extension = "hero___extension",
	hero___size = "hero___size",
	hero___prettySize = "hero___prettySize",
	hero___modifiedTime = "hero___modifiedTime",
	hero___accessTime = "hero___accessTime",
	hero___changeTime = "hero___changeTime",
	hero___birthTime = "hero___birthTime",
	hero___root = "hero___root",
	hero___dir = "hero___dir",
	hero___base = "hero___base",
	hero___ext = "hero___ext",
	hero___name = "hero___name",
	hero___relativeDirectory = "hero___relativeDirectory",
	hero___dev = "hero___dev",
	hero___mode = "hero___mode",
	hero___nlink = "hero___nlink",
	hero___uid = "hero___uid",
	hero___gid = "hero___gid",
	hero___rdev = "hero___rdev",
	hero___blksize = "hero___blksize",
	hero___ino = "hero___ino",
	hero___blocks = "hero___blocks",
	hero___atimeMs = "hero___atimeMs",
	hero___mtimeMs = "hero___mtimeMs",
	hero___ctimeMs = "hero___ctimeMs",
	hero___atime = "hero___atime",
	hero___mtime = "hero___mtime",
	hero___ctime = "hero___ctime",
	hero___publicURL = "hero___publicURL",
	hero___id = "hero___id",
	hero___parent___id = "hero___parent___id",
	hero___parent___parent___id = "hero___parent___parent___id",
	hero___parent___parent___children = "hero___parent___parent___children",
	hero___parent___children = "hero___parent___children",
	hero___parent___children___id = "hero___parent___children___id",
	hero___parent___children___children = "hero___parent___children___children",
	hero___parent___internal___content = "hero___parent___internal___content",
	hero___parent___internal___contentDigest = "hero___parent___internal___contentDigest",
	hero___parent___internal___description = "hero___parent___internal___description",
	hero___parent___internal___fieldOwners = "hero___parent___internal___fieldOwners",
	hero___parent___internal___ignoreType = "hero___parent___internal___ignoreType",
	hero___parent___internal___mediaType = "hero___parent___internal___mediaType",
	hero___parent___internal___owner = "hero___parent___internal___owner",
	hero___parent___internal___type = "hero___parent___internal___type",
	hero___children = "hero___children",
	hero___children___id = "hero___children___id",
	hero___children___parent___id = "hero___children___parent___id",
	hero___children___parent___children = "hero___children___parent___children",
	hero___children___children = "hero___children___children",
	hero___children___children___id = "hero___children___children___id",
	hero___children___children___children = "hero___children___children___children",
	hero___children___internal___content = "hero___children___internal___content",
	hero___children___internal___contentDigest = "hero___children___internal___contentDigest",
	hero___children___internal___description = "hero___children___internal___description",
	hero___children___internal___fieldOwners = "hero___children___internal___fieldOwners",
	hero___children___internal___ignoreType = "hero___children___internal___ignoreType",
	hero___children___internal___mediaType = "hero___children___internal___mediaType",
	hero___children___internal___owner = "hero___children___internal___owner",
	hero___children___internal___type = "hero___children___internal___type",
	hero___internal___content = "hero___internal___content",
	hero___internal___contentDigest = "hero___internal___contentDigest",
	hero___internal___description = "hero___internal___description",
	hero___internal___fieldOwners = "hero___internal___fieldOwners",
	hero___internal___ignoreType = "hero___internal___ignoreType",
	hero___internal___mediaType = "hero___internal___mediaType",
	hero___internal___owner = "hero___internal___owner",
	hero___internal___type = "hero___internal___type",
	hero___childMdx___rawBody = "hero___childMdx___rawBody",
	hero___childMdx___fileAbsolutePath = "hero___childMdx___fileAbsolutePath",
	hero___childMdx___frontmatter___title = "hero___childMdx___frontmatter___title",
	hero___childMdx___frontmatter___date = "hero___childMdx___frontmatter___date",
	hero___childMdx___frontmatter___excerpt = "hero___childMdx___frontmatter___excerpt",
	hero___childMdx___body = "hero___childMdx___body",
	hero___childMdx___excerpt = "hero___childMdx___excerpt",
	hero___childMdx___headings = "hero___childMdx___headings",
	hero___childMdx___headings___value = "hero___childMdx___headings___value",
	hero___childMdx___headings___depth = "hero___childMdx___headings___depth",
	hero___childMdx___html = "hero___childMdx___html",
	hero___childMdx___mdxAST = "hero___childMdx___mdxAST",
	hero___childMdx___tableOfContents = "hero___childMdx___tableOfContents",
	hero___childMdx___timeToRead = "hero___childMdx___timeToRead",
	hero___childMdx___wordCount___paragraphs = "hero___childMdx___wordCount___paragraphs",
	hero___childMdx___wordCount___sentences = "hero___childMdx___wordCount___sentences",
	hero___childMdx___wordCount___words = "hero___childMdx___wordCount___words",
	hero___childMdx___id = "hero___childMdx___id",
	hero___childMdx___parent___id = "hero___childMdx___parent___id",
	hero___childMdx___parent___children = "hero___childMdx___parent___children",
	hero___childMdx___children = "hero___childMdx___children",
	hero___childMdx___children___id = "hero___childMdx___children___id",
	hero___childMdx___children___children = "hero___childMdx___children___children",
	hero___childMdx___internal___content = "hero___childMdx___internal___content",
	hero___childMdx___internal___contentDigest = "hero___childMdx___internal___contentDigest",
	hero___childMdx___internal___description = "hero___childMdx___internal___description",
	hero___childMdx___internal___fieldOwners = "hero___childMdx___internal___fieldOwners",
	hero___childMdx___internal___ignoreType = "hero___childMdx___internal___ignoreType",
	hero___childMdx___internal___mediaType = "hero___childMdx___internal___mediaType",
	hero___childMdx___internal___owner = "hero___childMdx___internal___owner",
	hero___childMdx___internal___type = "hero___childMdx___internal___type",
	hero___childImageSharp___id = "hero___childImageSharp___id",
	hero___childImageSharp___fixed___base64 = "hero___childImageSharp___fixed___base64",
	hero___childImageSharp___fixed___tracedSVG = "hero___childImageSharp___fixed___tracedSVG",
	hero___childImageSharp___fixed___aspectRatio = "hero___childImageSharp___fixed___aspectRatio",
	hero___childImageSharp___fixed___width = "hero___childImageSharp___fixed___width",
	hero___childImageSharp___fixed___height = "hero___childImageSharp___fixed___height",
	hero___childImageSharp___fixed___src = "hero___childImageSharp___fixed___src",
	hero___childImageSharp___fixed___srcSet = "hero___childImageSharp___fixed___srcSet",
	hero___childImageSharp___fixed___srcWebp = "hero___childImageSharp___fixed___srcWebp",
	hero___childImageSharp___fixed___srcSetWebp = "hero___childImageSharp___fixed___srcSetWebp",
	hero___childImageSharp___fixed___originalName = "hero___childImageSharp___fixed___originalName",
	hero___childImageSharp___resolutions___base64 = "hero___childImageSharp___resolutions___base64",
	hero___childImageSharp___resolutions___tracedSVG = "hero___childImageSharp___resolutions___tracedSVG",
	hero___childImageSharp___resolutions___aspectRatio = "hero___childImageSharp___resolutions___aspectRatio",
	hero___childImageSharp___resolutions___width = "hero___childImageSharp___resolutions___width",
	hero___childImageSharp___resolutions___height = "hero___childImageSharp___resolutions___height",
	hero___childImageSharp___resolutions___src = "hero___childImageSharp___resolutions___src",
	hero___childImageSharp___resolutions___srcSet = "hero___childImageSharp___resolutions___srcSet",
	hero___childImageSharp___resolutions___srcWebp = "hero___childImageSharp___resolutions___srcWebp",
	hero___childImageSharp___resolutions___srcSetWebp = "hero___childImageSharp___resolutions___srcSetWebp",
	hero___childImageSharp___resolutions___originalName = "hero___childImageSharp___resolutions___originalName",
	hero___childImageSharp___fluid___base64 = "hero___childImageSharp___fluid___base64",
	hero___childImageSharp___fluid___tracedSVG = "hero___childImageSharp___fluid___tracedSVG",
	hero___childImageSharp___fluid___aspectRatio = "hero___childImageSharp___fluid___aspectRatio",
	hero___childImageSharp___fluid___src = "hero___childImageSharp___fluid___src",
	hero___childImageSharp___fluid___srcSet = "hero___childImageSharp___fluid___srcSet",
	hero___childImageSharp___fluid___srcWebp = "hero___childImageSharp___fluid___srcWebp",
	hero___childImageSharp___fluid___srcSetWebp = "hero___childImageSharp___fluid___srcSetWebp",
	hero___childImageSharp___fluid___sizes = "hero___childImageSharp___fluid___sizes",
	hero___childImageSharp___fluid___originalImg = "hero___childImageSharp___fluid___originalImg",
	hero___childImageSharp___fluid___originalName = "hero___childImageSharp___fluid___originalName",
	hero___childImageSharp___fluid___presentationWidth = "hero___childImageSharp___fluid___presentationWidth",
	hero___childImageSharp___fluid___presentationHeight = "hero___childImageSharp___fluid___presentationHeight",
	hero___childImageSharp___sizes___base64 = "hero___childImageSharp___sizes___base64",
	hero___childImageSharp___sizes___tracedSVG = "hero___childImageSharp___sizes___tracedSVG",
	hero___childImageSharp___sizes___aspectRatio = "hero___childImageSharp___sizes___aspectRatio",
	hero___childImageSharp___sizes___src = "hero___childImageSharp___sizes___src",
	hero___childImageSharp___sizes___srcSet = "hero___childImageSharp___sizes___srcSet",
	hero___childImageSharp___sizes___srcWebp = "hero___childImageSharp___sizes___srcWebp",
	hero___childImageSharp___sizes___srcSetWebp = "hero___childImageSharp___sizes___srcSetWebp",
	hero___childImageSharp___sizes___sizes = "hero___childImageSharp___sizes___sizes",
	hero___childImageSharp___sizes___originalImg = "hero___childImageSharp___sizes___originalImg",
	hero___childImageSharp___sizes___originalName = "hero___childImageSharp___sizes___originalName",
	hero___childImageSharp___sizes___presentationWidth = "hero___childImageSharp___sizes___presentationWidth",
	hero___childImageSharp___sizes___presentationHeight = "hero___childImageSharp___sizes___presentationHeight",
	hero___childImageSharp___original___width = "hero___childImageSharp___original___width",
	hero___childImageSharp___original___height = "hero___childImageSharp___original___height",
	hero___childImageSharp___original___src = "hero___childImageSharp___original___src",
	hero___childImageSharp___resize___src = "hero___childImageSharp___resize___src",
	hero___childImageSharp___resize___tracedSVG = "hero___childImageSharp___resize___tracedSVG",
	hero___childImageSharp___resize___width = "hero___childImageSharp___resize___width",
	hero___childImageSharp___resize___height = "hero___childImageSharp___resize___height",
	hero___childImageSharp___resize___aspectRatio = "hero___childImageSharp___resize___aspectRatio",
	hero___childImageSharp___resize___originalName = "hero___childImageSharp___resize___originalName",
	hero___childImageSharp___parent___id = "hero___childImageSharp___parent___id",
	hero___childImageSharp___parent___children = "hero___childImageSharp___parent___children",
	hero___childImageSharp___children = "hero___childImageSharp___children",
	hero___childImageSharp___children___id = "hero___childImageSharp___children___id",
	hero___childImageSharp___children___children = "hero___childImageSharp___children___children",
	hero___childImageSharp___internal___content = "hero___childImageSharp___internal___content",
	hero___childImageSharp___internal___contentDigest = "hero___childImageSharp___internal___contentDigest",
	hero___childImageSharp___internal___description = "hero___childImageSharp___internal___description",
	hero___childImageSharp___internal___fieldOwners = "hero___childImageSharp___internal___fieldOwners",
	hero___childImageSharp___internal___ignoreType = "hero___childImageSharp___internal___ignoreType",
	hero___childImageSharp___internal___mediaType = "hero___childImageSharp___internal___mediaType",
	hero___childImageSharp___internal___owner = "hero___childImageSharp___internal___owner",
	hero___childImageSharp___internal___type = "hero___childImageSharp___internal___type",
	hero___childrenAuthorsYaml = "hero___childrenAuthorsYaml",
	hero___childrenAuthorsYaml___id = "hero___childrenAuthorsYaml___id",
	hero___childrenAuthorsYaml___parent___id = "hero___childrenAuthorsYaml___parent___id",
	hero___childrenAuthorsYaml___parent___children = "hero___childrenAuthorsYaml___parent___children",
	hero___childrenAuthorsYaml___children = "hero___childrenAuthorsYaml___children",
	hero___childrenAuthorsYaml___children___id = "hero___childrenAuthorsYaml___children___id",
	hero___childrenAuthorsYaml___children___children = "hero___childrenAuthorsYaml___children___children",
	hero___childrenAuthorsYaml___internal___content = "hero___childrenAuthorsYaml___internal___content",
	hero___childrenAuthorsYaml___internal___contentDigest = "hero___childrenAuthorsYaml___internal___contentDigest",
	hero___childrenAuthorsYaml___internal___description = "hero___childrenAuthorsYaml___internal___description",
	hero___childrenAuthorsYaml___internal___fieldOwners = "hero___childrenAuthorsYaml___internal___fieldOwners",
	hero___childrenAuthorsYaml___internal___ignoreType = "hero___childrenAuthorsYaml___internal___ignoreType",
	hero___childrenAuthorsYaml___internal___mediaType = "hero___childrenAuthorsYaml___internal___mediaType",
	hero___childrenAuthorsYaml___internal___owner = "hero___childrenAuthorsYaml___internal___owner",
	hero___childrenAuthorsYaml___internal___type = "hero___childrenAuthorsYaml___internal___type",
	hero___childrenAuthorsYaml___name = "hero___childrenAuthorsYaml___name",
	hero___childrenAuthorsYaml___bio = "hero___childrenAuthorsYaml___bio",
	hero___childrenAuthorsYaml___avatar___birthtime = "hero___childrenAuthorsYaml___avatar___birthtime",
	hero___childrenAuthorsYaml___avatar___birthtimeMs = "hero___childrenAuthorsYaml___avatar___birthtimeMs",
	hero___childrenAuthorsYaml___avatar___sourceInstanceName = "hero___childrenAuthorsYaml___avatar___sourceInstanceName",
	hero___childrenAuthorsYaml___avatar___absolutePath = "hero___childrenAuthorsYaml___avatar___absolutePath",
	hero___childrenAuthorsYaml___avatar___relativePath = "hero___childrenAuthorsYaml___avatar___relativePath",
	hero___childrenAuthorsYaml___avatar___extension = "hero___childrenAuthorsYaml___avatar___extension",
	hero___childrenAuthorsYaml___avatar___size = "hero___childrenAuthorsYaml___avatar___size",
	hero___childrenAuthorsYaml___avatar___prettySize = "hero___childrenAuthorsYaml___avatar___prettySize",
	hero___childrenAuthorsYaml___avatar___modifiedTime = "hero___childrenAuthorsYaml___avatar___modifiedTime",
	hero___childrenAuthorsYaml___avatar___accessTime = "hero___childrenAuthorsYaml___avatar___accessTime",
	hero___childrenAuthorsYaml___avatar___changeTime = "hero___childrenAuthorsYaml___avatar___changeTime",
	hero___childrenAuthorsYaml___avatar___birthTime = "hero___childrenAuthorsYaml___avatar___birthTime",
	hero___childrenAuthorsYaml___avatar___root = "hero___childrenAuthorsYaml___avatar___root",
	hero___childrenAuthorsYaml___avatar___dir = "hero___childrenAuthorsYaml___avatar___dir",
	hero___childrenAuthorsYaml___avatar___base = "hero___childrenAuthorsYaml___avatar___base",
	hero___childrenAuthorsYaml___avatar___ext = "hero___childrenAuthorsYaml___avatar___ext",
	hero___childrenAuthorsYaml___avatar___name = "hero___childrenAuthorsYaml___avatar___name",
	hero___childrenAuthorsYaml___avatar___relativeDirectory = "hero___childrenAuthorsYaml___avatar___relativeDirectory",
	hero___childrenAuthorsYaml___avatar___dev = "hero___childrenAuthorsYaml___avatar___dev",
	hero___childrenAuthorsYaml___avatar___mode = "hero___childrenAuthorsYaml___avatar___mode",
	hero___childrenAuthorsYaml___avatar___nlink = "hero___childrenAuthorsYaml___avatar___nlink",
	hero___childrenAuthorsYaml___avatar___uid = "hero___childrenAuthorsYaml___avatar___uid",
	hero___childrenAuthorsYaml___avatar___gid = "hero___childrenAuthorsYaml___avatar___gid",
	hero___childrenAuthorsYaml___avatar___rdev = "hero___childrenAuthorsYaml___avatar___rdev",
	hero___childrenAuthorsYaml___avatar___blksize = "hero___childrenAuthorsYaml___avatar___blksize",
	hero___childrenAuthorsYaml___avatar___ino = "hero___childrenAuthorsYaml___avatar___ino",
	hero___childrenAuthorsYaml___avatar___blocks = "hero___childrenAuthorsYaml___avatar___blocks",
	hero___childrenAuthorsYaml___avatar___atimeMs = "hero___childrenAuthorsYaml___avatar___atimeMs",
	hero___childrenAuthorsYaml___avatar___mtimeMs = "hero___childrenAuthorsYaml___avatar___mtimeMs",
	hero___childrenAuthorsYaml___avatar___ctimeMs = "hero___childrenAuthorsYaml___avatar___ctimeMs",
	hero___childrenAuthorsYaml___avatar___atime = "hero___childrenAuthorsYaml___avatar___atime",
	hero___childrenAuthorsYaml___avatar___mtime = "hero___childrenAuthorsYaml___avatar___mtime",
	hero___childrenAuthorsYaml___avatar___ctime = "hero___childrenAuthorsYaml___avatar___ctime",
	hero___childrenAuthorsYaml___avatar___publicURL = "hero___childrenAuthorsYaml___avatar___publicURL",
	hero___childrenAuthorsYaml___avatar___id = "hero___childrenAuthorsYaml___avatar___id",
	hero___childrenAuthorsYaml___avatar___children = "hero___childrenAuthorsYaml___avatar___children",
	hero___childrenAuthorsYaml___avatar___childrenAuthorsYaml = "hero___childrenAuthorsYaml___avatar___childrenAuthorsYaml",
	hero___childrenAuthorsYaml___featured = "hero___childrenAuthorsYaml___featured",
	hero___childrenAuthorsYaml___social = "hero___childrenAuthorsYaml___social",
	hero___childrenAuthorsYaml___social___name = "hero___childrenAuthorsYaml___social___name",
	hero___childrenAuthorsYaml___social___url = "hero___childrenAuthorsYaml___social___url",
	timeToRead = "timeToRead",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type"
}

export type ArticleConnection = {
	__typename?: "ArticleConnection",
	totalCount:number,
	edges:ArticleEdge[],
	nodes:Article[],
	pageInfo:PageInfo,
	distinct:(props:{	field:ArticleFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:ArticleFieldsEnum}) => ArticleGroupConnection[]
}

export type ArticleEdge = {
	__typename?: "ArticleEdge",
	next?:Article,
	node:Article,
	previous?:Article
}

export type ArticleGroupConnection = {
	__typename?: "ArticleGroupConnection",
	totalCount:number,
	edges:ArticleEdge[],
	nodes:Article[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type MarkdownHeadingFilterListInput = {
		elemMatch?:MarkdownHeadingFilterInput
}

export type MarkdownHeadingFilterInput = {
		value?:StringQueryOperatorInput,
	depth?:IntQueryOperatorInput
}

export type MarkdownWordCountFilterInput = {
		paragraphs?:IntQueryOperatorInput,
	sentences?:IntQueryOperatorInput,
	words?:IntQueryOperatorInput
}

export type MarkdownRemark = {
	__typename?: "MarkdownRemark",
	id:string,
	html?:string,
	htmlAst?:JSON,
	excerpt:(props:{	pruneLength?:number,	truncate?:boolean,	format?:MarkdownExcerptFormats}) => string,
	excerptAst:(props:{	pruneLength?:number,	truncate?:boolean}) => JSON,
	headings:(props:{	depth?:MarkdownHeadingLevels}) => (MarkdownHeading | undefined)[],
	timeToRead?:number,
	tableOfContents:(props:{	pathToSlugField?:string,	maxDepth?:number,	heading?:string}) => string,
	wordCount?:MarkdownWordCount,
	parent?:Node,
	children:Node[],
	internal:Internal
}

export enum MarkdownExcerptFormats {
	PLAIN = "PLAIN",
	HTML = "HTML",
	MARKDOWN = "MARKDOWN"
}

export enum MarkdownHeadingLevels {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6"
}

export type MarkdownHeading = {
	__typename?: "MarkdownHeading",
	value?:string,
	depth?:number
}

export type MarkdownWordCount = {
	__typename?: "MarkdownWordCount",
	paragraphs?:number,
	sentences?:number,
	words?:number
}

export type MarkdownRemarkFilterInput = {
		id?:StringQueryOperatorInput,
	html?:StringQueryOperatorInput,
	htmlAst?:JSONQueryOperatorInput,
	excerpt?:StringQueryOperatorInput,
	excerptAst?:JSONQueryOperatorInput,
	headings?:MarkdownHeadingFilterListInput,
	timeToRead?:IntQueryOperatorInput,
	tableOfContents?:StringQueryOperatorInput,
	wordCount?:MarkdownWordCountFilterInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput
}

export type MarkdownRemarkSortInput = {
		fields?:(MarkdownRemarkFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum MarkdownRemarkFieldsEnum {
	id = "id",
	html = "html",
	htmlAst = "htmlAst",
	excerpt = "excerpt",
	excerptAst = "excerptAst",
	headings = "headings",
	headings___value = "headings___value",
	headings___depth = "headings___depth",
	timeToRead = "timeToRead",
	tableOfContents = "tableOfContents",
	wordCount___paragraphs = "wordCount___paragraphs",
	wordCount___sentences = "wordCount___sentences",
	wordCount___words = "wordCount___words",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type"
}

export type MarkdownRemarkConnection = {
	__typename?: "MarkdownRemarkConnection",
	totalCount:number,
	edges:MarkdownRemarkEdge[],
	nodes:MarkdownRemark[],
	pageInfo:PageInfo,
	distinct:(props:{	field:MarkdownRemarkFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:MarkdownRemarkFieldsEnum}) => MarkdownRemarkGroupConnection[]
}

export type MarkdownRemarkEdge = {
	__typename?: "MarkdownRemarkEdge",
	next?:MarkdownRemark,
	node:MarkdownRemark,
	previous?:MarkdownRemark
}

export type MarkdownRemarkGroupConnection = {
	__typename?: "MarkdownRemarkGroupConnection",
	totalCount:number,
	edges:MarkdownRemarkEdge[],
	nodes:MarkdownRemark[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type SitePageContextFilterInput = {
		basePath?:StringQueryOperatorInput,
	skip?:IntQueryOperatorInput,
	limit?:IntQueryOperatorInput,
	group?:SitePageContextGroupFilterListInput,
	pathPrefix?:StringQueryOperatorInput,
	first?:BooleanQueryOperatorInput,
	last?:BooleanQueryOperatorInput,
	index?:IntQueryOperatorInput,
	pageCount?:IntQueryOperatorInput,
	additionalContext?:SitePageContextAdditionalContextFilterInput,
	article?:SitePageContextArticleFilterInput,
	authors?:SitePageContextAuthorsFilterListInput,
	slug?:StringQueryOperatorInput,
	id?:StringQueryOperatorInput,
	title?:StringQueryOperatorInput,
	author?:SitePageContextAuthorFilterInput,
	originalPath?:StringQueryOperatorInput
}

export type SitePageContextGroupFilterListInput = {
		elemMatch?:SitePageContextGroupFilterInput
}

export type SitePageContextGroupFilterInput = {
		node?:SitePageContextGroupNodeFilterInput
}

export type SitePageContextGroupNodeFilterInput = {
		id?:StringQueryOperatorInput,
	slug?:StringQueryOperatorInput,
	title?:StringQueryOperatorInput,
	author?:StringQueryOperatorInput,
	date?:StringQueryOperatorInput,
	dateForSEO?:DateQueryOperatorInput,
	timeToRead?:IntQueryOperatorInput,
	excerpt?:StringQueryOperatorInput,
	body?:StringQueryOperatorInput,
	hero?:SitePageContextGroupNodeHeroFilterInput
}

export type SitePageContextGroupNodeHeroFilterInput = {
		full?:SitePageContextGroupNodeHeroFullFilterInput,
	regular?:SitePageContextGroupNodeHeroRegularFilterInput,
	narrow?:SitePageContextGroupNodeHeroNarrowFilterInput,
	seo?:SitePageContextGroupNodeHeroSeoFilterInput
}

export type SitePageContextGroupNodeHeroFullFilterInput = {
		fluid?:SitePageContextGroupNodeHeroFullFluidFilterInput
}

export type SitePageContextGroupNodeHeroFullFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextGroupNodeHeroRegularFilterInput = {
		fluid?:SitePageContextGroupNodeHeroRegularFluidFilterInput
}

export type SitePageContextGroupNodeHeroRegularFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextGroupNodeHeroNarrowFilterInput = {
		fluid?:SitePageContextGroupNodeHeroNarrowFluidFilterInput
}

export type SitePageContextGroupNodeHeroNarrowFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextGroupNodeHeroSeoFilterInput = {
		fixed?:SitePageContextGroupNodeHeroSeoFixedFilterInput
}

export type SitePageContextGroupNodeHeroSeoFixedFilterInput = {
		src?:StringQueryOperatorInput
}

export type SitePageContextAdditionalContextFilterInput = {
		basePath?:StringQueryOperatorInput,
	skip?:IntQueryOperatorInput,
	limit?:IntQueryOperatorInput,
	author?:SitePageContextAdditionalContextAuthorFilterInput,
	originalPath?:StringQueryOperatorInput
}

export type SitePageContextAdditionalContextAuthorFilterInput = {
		authorsPage?:BooleanQueryOperatorInput,
	bio?:StringQueryOperatorInput,
	id?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	social?:SitePageContextAdditionalContextAuthorSocialFilterListInput,
	slug?:StringQueryOperatorInput,
	avatar?:SitePageContextAdditionalContextAuthorAvatarFilterInput
}

export type SitePageContextAdditionalContextAuthorSocialFilterListInput = {
		elemMatch?:SitePageContextAdditionalContextAuthorSocialFilterInput
}

export type SitePageContextAdditionalContextAuthorSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type SitePageContextAdditionalContextAuthorAvatarFilterInput = {
		small?:SitePageContextAdditionalContextAuthorAvatarSmallFilterInput,
	medium?:SitePageContextAdditionalContextAuthorAvatarMediumFilterInput,
	large?:SitePageContextAdditionalContextAuthorAvatarLargeFilterInput
}

export type SitePageContextAdditionalContextAuthorAvatarSmallFilterInput = {
		fluid?:SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput
}

export type SitePageContextAdditionalContextAuthorAvatarSmallFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAdditionalContextAuthorAvatarMediumFilterInput = {
		fluid?:SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput
}

export type SitePageContextAdditionalContextAuthorAvatarMediumFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAdditionalContextAuthorAvatarLargeFilterInput = {
		fluid?:SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput
}

export type SitePageContextAdditionalContextAuthorAvatarLargeFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextArticleFilterInput = {
		id?:StringQueryOperatorInput,
	slug?:StringQueryOperatorInput,
	title?:StringQueryOperatorInput,
	author?:StringQueryOperatorInput,
	date?:StringQueryOperatorInput,
	dateForSEO?:DateQueryOperatorInput,
	timeToRead?:IntQueryOperatorInput,
	excerpt?:StringQueryOperatorInput,
	body?:StringQueryOperatorInput,
	hero?:SitePageContextArticleHeroFilterInput
}

export type SitePageContextArticleHeroFilterInput = {
		full?:SitePageContextArticleHeroFullFilterInput,
	regular?:SitePageContextArticleHeroRegularFilterInput,
	narrow?:SitePageContextArticleHeroNarrowFilterInput,
	seo?:SitePageContextArticleHeroSeoFilterInput
}

export type SitePageContextArticleHeroFullFilterInput = {
		fluid?:SitePageContextArticleHeroFullFluidFilterInput
}

export type SitePageContextArticleHeroFullFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextArticleHeroRegularFilterInput = {
		fluid?:SitePageContextArticleHeroRegularFluidFilterInput
}

export type SitePageContextArticleHeroRegularFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextArticleHeroNarrowFilterInput = {
		fluid?:SitePageContextArticleHeroNarrowFluidFilterInput
}

export type SitePageContextArticleHeroNarrowFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:FloatQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextArticleHeroSeoFilterInput = {
		fixed?:SitePageContextArticleHeroSeoFixedFilterInput
}

export type SitePageContextArticleHeroSeoFixedFilterInput = {
		src?:StringQueryOperatorInput
}

export type SitePageContextAuthorsFilterListInput = {
		elemMatch?:SitePageContextAuthorsFilterInput
}

export type SitePageContextAuthorsFilterInput = {
		node?:SitePageContextAuthorsNodeFilterInput
}

export type SitePageContextAuthorsNodeFilterInput = {
		authorsPage?:BooleanQueryOperatorInput,
	bio?:StringQueryOperatorInput,
	id?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	social?:SitePageContextAuthorsNodeSocialFilterListInput,
	slug?:StringQueryOperatorInput,
	avatar?:SitePageContextAuthorsNodeAvatarFilterInput
}

export type SitePageContextAuthorsNodeSocialFilterListInput = {
		elemMatch?:SitePageContextAuthorsNodeSocialFilterInput
}

export type SitePageContextAuthorsNodeSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type SitePageContextAuthorsNodeAvatarFilterInput = {
		small?:SitePageContextAuthorsNodeAvatarSmallFilterInput,
	medium?:SitePageContextAuthorsNodeAvatarMediumFilterInput,
	large?:SitePageContextAuthorsNodeAvatarLargeFilterInput
}

export type SitePageContextAuthorsNodeAvatarSmallFilterInput = {
		fluid?:SitePageContextAuthorsNodeAvatarSmallFluidFilterInput
}

export type SitePageContextAuthorsNodeAvatarSmallFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAuthorsNodeAvatarMediumFilterInput = {
		fluid?:SitePageContextAuthorsNodeAvatarMediumFluidFilterInput
}

export type SitePageContextAuthorsNodeAvatarMediumFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAuthorsNodeAvatarLargeFilterInput = {
		fluid?:SitePageContextAuthorsNodeAvatarLargeFluidFilterInput
}

export type SitePageContextAuthorsNodeAvatarLargeFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAuthorFilterInput = {
		authorsPage?:BooleanQueryOperatorInput,
	bio?:StringQueryOperatorInput,
	id?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	social?:SitePageContextAuthorSocialFilterListInput,
	slug?:StringQueryOperatorInput,
	avatar?:SitePageContextAuthorAvatarFilterInput
}

export type SitePageContextAuthorSocialFilterListInput = {
		elemMatch?:SitePageContextAuthorSocialFilterInput
}

export type SitePageContextAuthorSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type SitePageContextAuthorAvatarFilterInput = {
		small?:SitePageContextAuthorAvatarSmallFilterInput,
	medium?:SitePageContextAuthorAvatarMediumFilterInput,
	large?:SitePageContextAuthorAvatarLargeFilterInput
}

export type SitePageContextAuthorAvatarSmallFilterInput = {
		fluid?:SitePageContextAuthorAvatarSmallFluidFilterInput
}

export type SitePageContextAuthorAvatarSmallFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAuthorAvatarMediumFilterInput = {
		fluid?:SitePageContextAuthorAvatarMediumFluidFilterInput
}

export type SitePageContextAuthorAvatarMediumFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePageContextAuthorAvatarLargeFilterInput = {
		fluid?:SitePageContextAuthorAvatarLargeFluidFilterInput
}

export type SitePageContextAuthorAvatarLargeFluidFilterInput = {
		base64?:StringQueryOperatorInput,
	aspectRatio?:IntQueryOperatorInput,
	src?:StringQueryOperatorInput,
	srcSet?:StringQueryOperatorInput,
	srcWebp?:StringQueryOperatorInput,
	srcSetWebp?:StringQueryOperatorInput,
	sizes?:StringQueryOperatorInput
}

export type SitePluginFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	resolve?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	version?:StringQueryOperatorInput,
	pluginOptions?:SitePluginPluginOptionsFilterInput,
	nodeAPIs?:StringQueryOperatorInput,
	browserAPIs?:StringQueryOperatorInput,
	ssrAPIs?:StringQueryOperatorInput,
	pluginFilepath?:StringQueryOperatorInput,
	packageJson?:SitePluginPackageJsonFilterInput
}

export type SitePluginPluginOptionsFilterInput = {
		path?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	extensions?:StringQueryOperatorInput,
	gatsbyRemarkPlugins?:SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput,
	displayName?:BooleanQueryOperatorInput,
	contentPosts?:StringQueryOperatorInput,
	contentAuthors?:StringQueryOperatorInput,
	authorsPage?:BooleanQueryOperatorInput,
	basePath?:StringQueryOperatorInput,
	short_name?:StringQueryOperatorInput,
	start_url?:StringQueryOperatorInput,
	background_color?:StringQueryOperatorInput,
	theme_color?:StringQueryOperatorInput,
	display?:StringQueryOperatorInput,
	icon?:StringQueryOperatorInput,
	pathCheck?:BooleanQueryOperatorInput
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
		elemMatch?:SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
		resolve?:StringQueryOperatorInput,
	options?:SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
		maxWidth?:IntQueryOperatorInput,
	linkImagesToOriginal?:BooleanQueryOperatorInput,
	quality?:IntQueryOperatorInput,
	withWebp?:BooleanQueryOperatorInput,
	pathPrefix?:StringQueryOperatorInput,
	wrapperStyle?:StringQueryOperatorInput,
	backgroundColor?:StringQueryOperatorInput,
	showCaptions?:BooleanQueryOperatorInput,
	tracedSVG?:BooleanQueryOperatorInput,
	loading?:StringQueryOperatorInput
}

export type SitePluginPackageJsonFilterInput = {
		name?:StringQueryOperatorInput,
	description?:StringQueryOperatorInput,
	version?:StringQueryOperatorInput,
	main?:StringQueryOperatorInput,
	license?:StringQueryOperatorInput,
	dependencies?:SitePluginPackageJsonDependenciesFilterListInput,
	devDependencies?:SitePluginPackageJsonDevDependenciesFilterListInput,
	peerDependencies?:SitePluginPackageJsonPeerDependenciesFilterListInput,
	keywords?:StringQueryOperatorInput
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
		elemMatch?:SitePluginPackageJsonDependenciesFilterInput
}

export type SitePluginPackageJsonDependenciesFilterInput = {
		name?:StringQueryOperatorInput,
	version?:StringQueryOperatorInput
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
		elemMatch?:SitePluginPackageJsonDevDependenciesFilterInput
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
		name?:StringQueryOperatorInput,
	version?:StringQueryOperatorInput
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
		elemMatch?:SitePluginPackageJsonPeerDependenciesFilterInput
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
		name?:StringQueryOperatorInput,
	version?:StringQueryOperatorInput
}

export type SitePage = {
	__typename?: "SitePage",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	path?:string,
	internalComponentName?:string,
	component?:string,
	componentChunkName?:string,
	isCreatedByStatefulCreatePages?:boolean,
	context?:SitePageContext,
	pluginCreator?:SitePlugin,
	pluginCreatorId?:string,
	componentPath?:string
}

export type SitePageContext = {
	__typename?: "SitePageContext",
	basePath?:string,
	skip?:number,
	limit?:number,
	group?:(SitePageContextGroup | undefined)[],
	pathPrefix?:string,
	first?:boolean,
	last?:boolean,
	index?:number,
	pageCount?:number,
	additionalContext?:SitePageContextAdditionalContext,
	article?:SitePageContextArticle,
	authors?:(SitePageContextAuthors | undefined)[],
	slug?:string,
	id?:string,
	title?:string,
	author?:SitePageContextAuthor,
	originalPath?:string
}

export type SitePageContextGroup = {
	__typename?: "SitePageContextGroup",
	node?:SitePageContextGroupNode
}

export type SitePageContextGroupNode = {
	__typename?: "SitePageContextGroupNode",
	id?:string,
	slug?:string,
	title?:string,
	author?:string,
	date?:string,
	dateForSEO?:Date,
	timeToRead?:number,
	excerpt?:string,
	body?:string,
	hero?:SitePageContextGroupNodeHero
}

export type SitePageContextGroupNodeHero = {
	__typename?: "SitePageContextGroupNodeHero",
	full?:SitePageContextGroupNodeHeroFull,
	regular?:SitePageContextGroupNodeHeroRegular,
	narrow?:SitePageContextGroupNodeHeroNarrow,
	seo?:SitePageContextGroupNodeHeroSeo
}

export type SitePageContextGroupNodeHeroFull = {
	__typename?: "SitePageContextGroupNodeHeroFull",
	fluid?:SitePageContextGroupNodeHeroFullFluid
}

export type SitePageContextGroupNodeHeroFullFluid = {
	__typename?: "SitePageContextGroupNodeHeroFullFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextGroupNodeHeroRegular = {
	__typename?: "SitePageContextGroupNodeHeroRegular",
	fluid?:SitePageContextGroupNodeHeroRegularFluid
}

export type SitePageContextGroupNodeHeroRegularFluid = {
	__typename?: "SitePageContextGroupNodeHeroRegularFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextGroupNodeHeroNarrow = {
	__typename?: "SitePageContextGroupNodeHeroNarrow",
	fluid?:SitePageContextGroupNodeHeroNarrowFluid
}

export type SitePageContextGroupNodeHeroNarrowFluid = {
	__typename?: "SitePageContextGroupNodeHeroNarrowFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextGroupNodeHeroSeo = {
	__typename?: "SitePageContextGroupNodeHeroSeo",
	fixed?:SitePageContextGroupNodeHeroSeoFixed
}

export type SitePageContextGroupNodeHeroSeoFixed = {
	__typename?: "SitePageContextGroupNodeHeroSeoFixed",
	src?:string
}

export type SitePageContextAdditionalContext = {
	__typename?: "SitePageContextAdditionalContext",
	basePath?:string,
	skip?:number,
	limit?:number,
	author?:SitePageContextAdditionalContextAuthor,
	originalPath?:string
}

export type SitePageContextAdditionalContextAuthor = {
	__typename?: "SitePageContextAdditionalContextAuthor",
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(SitePageContextAdditionalContextAuthorSocial | undefined)[],
	slug?:string,
	avatar?:SitePageContextAdditionalContextAuthorAvatar
}

export type SitePageContextAdditionalContextAuthorSocial = {
	__typename?: "SitePageContextAdditionalContextAuthorSocial",
	name?:string,
	url?:string
}

export type SitePageContextAdditionalContextAuthorAvatar = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatar",
	small?:SitePageContextAdditionalContextAuthorAvatarSmall,
	medium?:SitePageContextAdditionalContextAuthorAvatarMedium,
	large?:SitePageContextAdditionalContextAuthorAvatarLarge
}

export type SitePageContextAdditionalContextAuthorAvatarSmall = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarSmall",
	fluid?:SitePageContextAdditionalContextAuthorAvatarSmallFluid
}

export type SitePageContextAdditionalContextAuthorAvatarSmallFluid = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarSmallFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAdditionalContextAuthorAvatarMedium = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarMedium",
	fluid?:SitePageContextAdditionalContextAuthorAvatarMediumFluid
}

export type SitePageContextAdditionalContextAuthorAvatarMediumFluid = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarMediumFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAdditionalContextAuthorAvatarLarge = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarLarge",
	fluid?:SitePageContextAdditionalContextAuthorAvatarLargeFluid
}

export type SitePageContextAdditionalContextAuthorAvatarLargeFluid = {
	__typename?: "SitePageContextAdditionalContextAuthorAvatarLargeFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextArticle = {
	__typename?: "SitePageContextArticle",
	id?:string,
	slug?:string,
	title?:string,
	author?:string,
	date?:string,
	dateForSEO?:Date,
	timeToRead?:number,
	excerpt?:string,
	body?:string,
	hero?:SitePageContextArticleHero
}

export type SitePageContextArticleHero = {
	__typename?: "SitePageContextArticleHero",
	full?:SitePageContextArticleHeroFull,
	regular?:SitePageContextArticleHeroRegular,
	narrow?:SitePageContextArticleHeroNarrow,
	seo?:SitePageContextArticleHeroSeo
}

export type SitePageContextArticleHeroFull = {
	__typename?: "SitePageContextArticleHeroFull",
	fluid?:SitePageContextArticleHeroFullFluid
}

export type SitePageContextArticleHeroFullFluid = {
	__typename?: "SitePageContextArticleHeroFullFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextArticleHeroRegular = {
	__typename?: "SitePageContextArticleHeroRegular",
	fluid?:SitePageContextArticleHeroRegularFluid
}

export type SitePageContextArticleHeroRegularFluid = {
	__typename?: "SitePageContextArticleHeroRegularFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextArticleHeroNarrow = {
	__typename?: "SitePageContextArticleHeroNarrow",
	fluid?:SitePageContextArticleHeroNarrowFluid
}

export type SitePageContextArticleHeroNarrowFluid = {
	__typename?: "SitePageContextArticleHeroNarrowFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextArticleHeroSeo = {
	__typename?: "SitePageContextArticleHeroSeo",
	fixed?:SitePageContextArticleHeroSeoFixed
}

export type SitePageContextArticleHeroSeoFixed = {
	__typename?: "SitePageContextArticleHeroSeoFixed",
	src?:string
}

export type SitePageContextAuthors = {
	__typename?: "SitePageContextAuthors",
	node?:SitePageContextAuthorsNode
}

export type SitePageContextAuthorsNode = {
	__typename?: "SitePageContextAuthorsNode",
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(SitePageContextAuthorsNodeSocial | undefined)[],
	slug?:string,
	avatar?:SitePageContextAuthorsNodeAvatar
}

export type SitePageContextAuthorsNodeSocial = {
	__typename?: "SitePageContextAuthorsNodeSocial",
	name?:string,
	url?:string
}

export type SitePageContextAuthorsNodeAvatar = {
	__typename?: "SitePageContextAuthorsNodeAvatar",
	small?:SitePageContextAuthorsNodeAvatarSmall,
	medium?:SitePageContextAuthorsNodeAvatarMedium,
	large?:SitePageContextAuthorsNodeAvatarLarge
}

export type SitePageContextAuthorsNodeAvatarSmall = {
	__typename?: "SitePageContextAuthorsNodeAvatarSmall",
	fluid?:SitePageContextAuthorsNodeAvatarSmallFluid
}

export type SitePageContextAuthorsNodeAvatarSmallFluid = {
	__typename?: "SitePageContextAuthorsNodeAvatarSmallFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAuthorsNodeAvatarMedium = {
	__typename?: "SitePageContextAuthorsNodeAvatarMedium",
	fluid?:SitePageContextAuthorsNodeAvatarMediumFluid
}

export type SitePageContextAuthorsNodeAvatarMediumFluid = {
	__typename?: "SitePageContextAuthorsNodeAvatarMediumFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAuthorsNodeAvatarLarge = {
	__typename?: "SitePageContextAuthorsNodeAvatarLarge",
	fluid?:SitePageContextAuthorsNodeAvatarLargeFluid
}

export type SitePageContextAuthorsNodeAvatarLargeFluid = {
	__typename?: "SitePageContextAuthorsNodeAvatarLargeFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAuthor = {
	__typename?: "SitePageContextAuthor",
	authorsPage?:boolean,
	bio?:string,
	id?:string,
	name?:string,
	social?:(SitePageContextAuthorSocial | undefined)[],
	slug?:string,
	avatar?:SitePageContextAuthorAvatar
}

export type SitePageContextAuthorSocial = {
	__typename?: "SitePageContextAuthorSocial",
	name?:string,
	url?:string
}

export type SitePageContextAuthorAvatar = {
	__typename?: "SitePageContextAuthorAvatar",
	small?:SitePageContextAuthorAvatarSmall,
	medium?:SitePageContextAuthorAvatarMedium,
	large?:SitePageContextAuthorAvatarLarge
}

export type SitePageContextAuthorAvatarSmall = {
	__typename?: "SitePageContextAuthorAvatarSmall",
	fluid?:SitePageContextAuthorAvatarSmallFluid
}

export type SitePageContextAuthorAvatarSmallFluid = {
	__typename?: "SitePageContextAuthorAvatarSmallFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAuthorAvatarMedium = {
	__typename?: "SitePageContextAuthorAvatarMedium",
	fluid?:SitePageContextAuthorAvatarMediumFluid
}

export type SitePageContextAuthorAvatarMediumFluid = {
	__typename?: "SitePageContextAuthorAvatarMediumFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePageContextAuthorAvatarLarge = {
	__typename?: "SitePageContextAuthorAvatarLarge",
	fluid?:SitePageContextAuthorAvatarLargeFluid
}

export type SitePageContextAuthorAvatarLargeFluid = {
	__typename?: "SitePageContextAuthorAvatarLargeFluid",
	base64?:string,
	aspectRatio?:number,
	src?:string,
	srcSet?:string,
	srcWebp?:string,
	srcSetWebp?:string,
	sizes?:string
}

export type SitePlugin = {
	__typename?: "SitePlugin",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	resolve?:string,
	name?:string,
	version?:string,
	pluginOptions?:SitePluginPluginOptions,
	nodeAPIs?:(string | undefined)[],
	browserAPIs?:(string | undefined)[],
	ssrAPIs?:(string | undefined)[],
	pluginFilepath?:string,
	packageJson?:SitePluginPackageJson
}

export type SitePluginPluginOptions = {
	__typename?: "SitePluginPluginOptions",
	path?:string,
	name?:string,
	extensions?:(string | undefined)[],
	gatsbyRemarkPlugins?:(SitePluginPluginOptionsGatsbyRemarkPlugins | undefined)[],
	displayName?:boolean,
	contentPosts?:string,
	contentAuthors?:string,
	authorsPage?:boolean,
	basePath?:string,
	short_name?:string,
	start_url?:string,
	background_color?:string,
	theme_color?:string,
	display?:string,
	icon?:string,
	pathCheck?:boolean
}

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
	__typename?: "SitePluginPluginOptionsGatsbyRemarkPlugins",
	resolve?:string,
	options?:SitePluginPluginOptionsGatsbyRemarkPluginsOptions
}

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
	__typename?: "SitePluginPluginOptionsGatsbyRemarkPluginsOptions",
	maxWidth?:number,
	linkImagesToOriginal?:boolean,
	quality?:number,
	withWebp?:boolean,
	pathPrefix?:string,
	wrapperStyle?:string,
	backgroundColor?:string,
	showCaptions?:boolean,
	tracedSVG?:boolean,
	loading?:string
}

export type SitePluginPackageJson = {
	__typename?: "SitePluginPackageJson",
	name?:string,
	description?:string,
	version?:string,
	main?:string,
	license?:string,
	dependencies?:(SitePluginPackageJsonDependencies | undefined)[],
	devDependencies?:(SitePluginPackageJsonDevDependencies | undefined)[],
	peerDependencies?:(SitePluginPackageJsonPeerDependencies | undefined)[],
	keywords?:(string | undefined)[]
}

export type SitePluginPackageJsonDependencies = {
	__typename?: "SitePluginPackageJsonDependencies",
	name?:string,
	version?:string
}

export type SitePluginPackageJsonDevDependencies = {
	__typename?: "SitePluginPackageJsonDevDependencies",
	name?:string,
	version?:string
}

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: "SitePluginPackageJsonPeerDependencies",
	name?:string,
	version?:string
}

export type SitePageFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	path?:StringQueryOperatorInput,
	internalComponentName?:StringQueryOperatorInput,
	component?:StringQueryOperatorInput,
	componentChunkName?:StringQueryOperatorInput,
	isCreatedByStatefulCreatePages?:BooleanQueryOperatorInput,
	context?:SitePageContextFilterInput,
	pluginCreator?:SitePluginFilterInput,
	pluginCreatorId?:StringQueryOperatorInput,
	componentPath?:StringQueryOperatorInput
}

export type SitePageSortInput = {
		fields?:(SitePageFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum SitePageFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	path = "path",
	internalComponentName = "internalComponentName",
	component = "component",
	componentChunkName = "componentChunkName",
	isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
	context___basePath = "context___basePath",
	context___skip = "context___skip",
	context___limit = "context___limit",
	context___group = "context___group",
	context___group___node___id = "context___group___node___id",
	context___group___node___slug = "context___group___node___slug",
	context___group___node___title = "context___group___node___title",
	context___group___node___author = "context___group___node___author",
	context___group___node___date = "context___group___node___date",
	context___group___node___dateForSEO = "context___group___node___dateForSEO",
	context___group___node___timeToRead = "context___group___node___timeToRead",
	context___group___node___excerpt = "context___group___node___excerpt",
	context___group___node___body = "context___group___node___body",
	context___pathPrefix = "context___pathPrefix",
	context___first = "context___first",
	context___last = "context___last",
	context___index = "context___index",
	context___pageCount = "context___pageCount",
	context___additionalContext___basePath = "context___additionalContext___basePath",
	context___additionalContext___skip = "context___additionalContext___skip",
	context___additionalContext___limit = "context___additionalContext___limit",
	context___additionalContext___author___authorsPage = "context___additionalContext___author___authorsPage",
	context___additionalContext___author___bio = "context___additionalContext___author___bio",
	context___additionalContext___author___id = "context___additionalContext___author___id",
	context___additionalContext___author___name = "context___additionalContext___author___name",
	context___additionalContext___author___social = "context___additionalContext___author___social",
	context___additionalContext___author___slug = "context___additionalContext___author___slug",
	context___additionalContext___originalPath = "context___additionalContext___originalPath",
	context___article___id = "context___article___id",
	context___article___slug = "context___article___slug",
	context___article___title = "context___article___title",
	context___article___author = "context___article___author",
	context___article___date = "context___article___date",
	context___article___dateForSEO = "context___article___dateForSEO",
	context___article___timeToRead = "context___article___timeToRead",
	context___article___excerpt = "context___article___excerpt",
	context___article___body = "context___article___body",
	context___authors = "context___authors",
	context___authors___node___authorsPage = "context___authors___node___authorsPage",
	context___authors___node___bio = "context___authors___node___bio",
	context___authors___node___id = "context___authors___node___id",
	context___authors___node___name = "context___authors___node___name",
	context___authors___node___social = "context___authors___node___social",
	context___authors___node___slug = "context___authors___node___slug",
	context___slug = "context___slug",
	context___id = "context___id",
	context___title = "context___title",
	context___author___authorsPage = "context___author___authorsPage",
	context___author___bio = "context___author___bio",
	context___author___id = "context___author___id",
	context___author___name = "context___author___name",
	context___author___social = "context___author___social",
	context___author___social___name = "context___author___social___name",
	context___author___social___url = "context___author___social___url",
	context___author___slug = "context___author___slug",
	context___originalPath = "context___originalPath",
	pluginCreator___id = "pluginCreator___id",
	pluginCreator___parent___id = "pluginCreator___parent___id",
	pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
	pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
	pluginCreator___parent___children = "pluginCreator___parent___children",
	pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
	pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
	pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
	pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
	pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
	pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
	pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
	pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
	pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
	pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
	pluginCreator___children = "pluginCreator___children",
	pluginCreator___children___id = "pluginCreator___children___id",
	pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
	pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
	pluginCreator___children___children = "pluginCreator___children___children",
	pluginCreator___children___children___id = "pluginCreator___children___children___id",
	pluginCreator___children___children___children = "pluginCreator___children___children___children",
	pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
	pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
	pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
	pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
	pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
	pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
	pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
	pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
	pluginCreator___internal___content = "pluginCreator___internal___content",
	pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
	pluginCreator___internal___description = "pluginCreator___internal___description",
	pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
	pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
	pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
	pluginCreator___internal___owner = "pluginCreator___internal___owner",
	pluginCreator___internal___type = "pluginCreator___internal___type",
	pluginCreator___resolve = "pluginCreator___resolve",
	pluginCreator___name = "pluginCreator___name",
	pluginCreator___version = "pluginCreator___version",
	pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
	pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
	pluginCreator___pluginOptions___extensions = "pluginCreator___pluginOptions___extensions",
	pluginCreator___pluginOptions___gatsbyRemarkPlugins = "pluginCreator___pluginOptions___gatsbyRemarkPlugins",
	pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve = "pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve",
	pluginCreator___pluginOptions___displayName = "pluginCreator___pluginOptions___displayName",
	pluginCreator___pluginOptions___contentPosts = "pluginCreator___pluginOptions___contentPosts",
	pluginCreator___pluginOptions___contentAuthors = "pluginCreator___pluginOptions___contentAuthors",
	pluginCreator___pluginOptions___authorsPage = "pluginCreator___pluginOptions___authorsPage",
	pluginCreator___pluginOptions___basePath = "pluginCreator___pluginOptions___basePath",
	pluginCreator___pluginOptions___short_name = "pluginCreator___pluginOptions___short_name",
	pluginCreator___pluginOptions___start_url = "pluginCreator___pluginOptions___start_url",
	pluginCreator___pluginOptions___background_color = "pluginCreator___pluginOptions___background_color",
	pluginCreator___pluginOptions___theme_color = "pluginCreator___pluginOptions___theme_color",
	pluginCreator___pluginOptions___display = "pluginCreator___pluginOptions___display",
	pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
	pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
	pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
	pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
	pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
	pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
	pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
	pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
	pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
	pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
	pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
	pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
	pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
	pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
	pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
	pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
	pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
	pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
	pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
	pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
	pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
	pluginCreatorId = "pluginCreatorId",
	componentPath = "componentPath"
}

export type SitePageConnection = {
	__typename?: "SitePageConnection",
	totalCount:number,
	edges:SitePageEdge[],
	nodes:SitePage[],
	pageInfo:PageInfo,
	distinct:(props:{	field:SitePageFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:SitePageFieldsEnum}) => SitePageGroupConnection[]
}

export type SitePageEdge = {
	__typename?: "SitePageEdge",
	next?:SitePage,
	node:SitePage,
	previous?:SitePage
}

export type SitePageGroupConnection = {
	__typename?: "SitePageGroupConnection",
	totalCount:number,
	edges:SitePageEdge[],
	nodes:SitePage[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type SitePluginSortInput = {
		fields?:(SitePluginFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum SitePluginFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	resolve = "resolve",
	name = "name",
	version = "version",
	pluginOptions___path = "pluginOptions___path",
	pluginOptions___name = "pluginOptions___name",
	pluginOptions___extensions = "pluginOptions___extensions",
	pluginOptions___gatsbyRemarkPlugins = "pluginOptions___gatsbyRemarkPlugins",
	pluginOptions___gatsbyRemarkPlugins___resolve = "pluginOptions___gatsbyRemarkPlugins___resolve",
	pluginOptions___gatsbyRemarkPlugins___options___maxWidth = "pluginOptions___gatsbyRemarkPlugins___options___maxWidth",
	pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal = "pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal",
	pluginOptions___gatsbyRemarkPlugins___options___quality = "pluginOptions___gatsbyRemarkPlugins___options___quality",
	pluginOptions___gatsbyRemarkPlugins___options___withWebp = "pluginOptions___gatsbyRemarkPlugins___options___withWebp",
	pluginOptions___gatsbyRemarkPlugins___options___pathPrefix = "pluginOptions___gatsbyRemarkPlugins___options___pathPrefix",
	pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle = "pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle",
	pluginOptions___gatsbyRemarkPlugins___options___backgroundColor = "pluginOptions___gatsbyRemarkPlugins___options___backgroundColor",
	pluginOptions___gatsbyRemarkPlugins___options___showCaptions = "pluginOptions___gatsbyRemarkPlugins___options___showCaptions",
	pluginOptions___gatsbyRemarkPlugins___options___tracedSVG = "pluginOptions___gatsbyRemarkPlugins___options___tracedSVG",
	pluginOptions___gatsbyRemarkPlugins___options___loading = "pluginOptions___gatsbyRemarkPlugins___options___loading",
	pluginOptions___displayName = "pluginOptions___displayName",
	pluginOptions___contentPosts = "pluginOptions___contentPosts",
	pluginOptions___contentAuthors = "pluginOptions___contentAuthors",
	pluginOptions___authorsPage = "pluginOptions___authorsPage",
	pluginOptions___basePath = "pluginOptions___basePath",
	pluginOptions___short_name = "pluginOptions___short_name",
	pluginOptions___start_url = "pluginOptions___start_url",
	pluginOptions___background_color = "pluginOptions___background_color",
	pluginOptions___theme_color = "pluginOptions___theme_color",
	pluginOptions___display = "pluginOptions___display",
	pluginOptions___icon = "pluginOptions___icon",
	pluginOptions___pathCheck = "pluginOptions___pathCheck",
	nodeAPIs = "nodeAPIs",
	browserAPIs = "browserAPIs",
	ssrAPIs = "ssrAPIs",
	pluginFilepath = "pluginFilepath",
	packageJson___name = "packageJson___name",
	packageJson___description = "packageJson___description",
	packageJson___version = "packageJson___version",
	packageJson___main = "packageJson___main",
	packageJson___license = "packageJson___license",
	packageJson___dependencies = "packageJson___dependencies",
	packageJson___dependencies___name = "packageJson___dependencies___name",
	packageJson___dependencies___version = "packageJson___dependencies___version",
	packageJson___devDependencies = "packageJson___devDependencies",
	packageJson___devDependencies___name = "packageJson___devDependencies___name",
	packageJson___devDependencies___version = "packageJson___devDependencies___version",
	packageJson___peerDependencies = "packageJson___peerDependencies",
	packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
	packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
	packageJson___keywords = "packageJson___keywords"
}

export type SitePluginConnection = {
	__typename?: "SitePluginConnection",
	totalCount:number,
	edges:SitePluginEdge[],
	nodes:SitePlugin[],
	pageInfo:PageInfo,
	distinct:(props:{	field:SitePluginFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:SitePluginFieldsEnum}) => SitePluginGroupConnection[]
}

export type SitePluginEdge = {
	__typename?: "SitePluginEdge",
	next?:SitePlugin,
	node:SitePlugin,
	previous?:SitePlugin
}

export type SitePluginGroupConnection = {
	__typename?: "SitePluginGroupConnection",
	totalCount:number,
	edges:SitePluginEdge[],
	nodes:SitePlugin[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type SiteSiteMetadataFilterInput = {
		title?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	siteUrl?:StringQueryOperatorInput,
	description?:StringQueryOperatorInput,
	hero?:SiteSiteMetadataHeroFilterInput,
	social?:SiteSiteMetadataSocialFilterListInput
}

export type SiteSiteMetadataHeroFilterInput = {
		heading?:StringQueryOperatorInput,
	maxWidth?:IntQueryOperatorInput
}

export type SiteSiteMetadataSocialFilterListInput = {
		elemMatch?:SiteSiteMetadataSocialFilterInput
}

export type SiteSiteMetadataSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type SiteMappingFilterInput = {
		Mdx_frontmatter_author?:StringQueryOperatorInput
}

export type Site = {
	__typename?: "Site",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	siteMetadata?:SiteSiteMetadata,
	port?:number,
	host?:string,
	mapping?:SiteMapping,
	polyfill?:boolean,
	pathPrefix?:string,
	buildTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date
}

export type SiteSiteMetadata = {
	__typename?: "SiteSiteMetadata",
	title?:string,
	name?:string,
	siteUrl?:string,
	description?:string,
	hero?:SiteSiteMetadataHero,
	social?:(SiteSiteMetadataSocial | undefined)[]
}

export type SiteSiteMetadataHero = {
	__typename?: "SiteSiteMetadataHero",
	heading?:string,
	maxWidth?:number
}

export type SiteSiteMetadataSocial = {
	__typename?: "SiteSiteMetadataSocial",
	name?:string,
	url?:string
}

export type SiteMapping = {
	__typename?: "SiteMapping",
	Mdx_frontmatter_author?:string
}

export type SiteFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	siteMetadata?:SiteSiteMetadataFilterInput,
	port?:IntQueryOperatorInput,
	host?:StringQueryOperatorInput,
	mapping?:SiteMappingFilterInput,
	polyfill?:BooleanQueryOperatorInput,
	pathPrefix?:StringQueryOperatorInput,
	buildTime?:DateQueryOperatorInput
}

export type SiteSortInput = {
		fields?:(SiteFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum SiteFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	siteMetadata___title = "siteMetadata___title",
	siteMetadata___name = "siteMetadata___name",
	siteMetadata___siteUrl = "siteMetadata___siteUrl",
	siteMetadata___description = "siteMetadata___description",
	siteMetadata___hero___heading = "siteMetadata___hero___heading",
	siteMetadata___hero___maxWidth = "siteMetadata___hero___maxWidth",
	siteMetadata___social = "siteMetadata___social",
	siteMetadata___social___name = "siteMetadata___social___name",
	siteMetadata___social___url = "siteMetadata___social___url",
	port = "port",
	host = "host",
	mapping___Mdx_frontmatter_author = "mapping___Mdx_frontmatter_author",
	polyfill = "polyfill",
	pathPrefix = "pathPrefix",
	buildTime = "buildTime"
}

export type SiteConnection = {
	__typename?: "SiteConnection",
	totalCount:number,
	edges:SiteEdge[],
	nodes:Site[],
	pageInfo:PageInfo,
	distinct:(props:{	field:SiteFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:SiteFieldsEnum}) => SiteGroupConnection[]
}

export type SiteEdge = {
	__typename?: "SiteEdge",
	next?:Site,
	node:Site,
	previous?:Site
}

export type SiteGroupConnection = {
	__typename?: "SiteGroupConnection",
	totalCount:number,
	edges:SiteEdge[],
	nodes:Site[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type Directory = {
	__typename?: "Directory",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	sourceInstanceName?:string,
	absolutePath?:string,
	relativePath?:string,
	extension?:string,
	size?:number,
	prettySize?:string,
	modifiedTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	accessTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	changeTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	birthTime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	root?:string,
	dir?:string,
	base?:string,
	ext?:string,
	name?:string,
	relativeDirectory?:string,
	dev?:number,
	mode?:number,
	nlink?:number,
	uid?:number,
	gid?:number,
	rdev?:number,
	blksize?:number,
	ino?:number,
	blocks?:number,
	atimeMs?:number,
	mtimeMs?:number,
	ctimeMs?:number,
	birthtimeMs?:number,
	atime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	mtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	ctime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date,
	birthtime:(props:{	/** Format the date using Moment.js' date tokens, e.g. `date(formatString: "YYYY
MMMM DD")`. See https://momentjs.com/docs/#/displaying/format/ for
documentation for different tokens. */
	formatString?:string,	/** Returns a string generated with Moment.js' `fromNow` function */
	fromNow?:boolean,	/** Returns the difference between this date and the current time. Defaults to
"milliseconds" but you can also pass in as the measurement "years",
"months", "weeks", "days", "hours", "minutes", and "seconds". */
	difference?:string,	/** Configures the locale Moment.js will use to format the date. */
	locale?:string}) => Date
}

export type DirectoryFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	sourceInstanceName?:StringQueryOperatorInput,
	absolutePath?:StringQueryOperatorInput,
	relativePath?:StringQueryOperatorInput,
	extension?:StringQueryOperatorInput,
	size?:IntQueryOperatorInput,
	prettySize?:StringQueryOperatorInput,
	modifiedTime?:DateQueryOperatorInput,
	accessTime?:DateQueryOperatorInput,
	changeTime?:DateQueryOperatorInput,
	birthTime?:DateQueryOperatorInput,
	root?:StringQueryOperatorInput,
	dir?:StringQueryOperatorInput,
	base?:StringQueryOperatorInput,
	ext?:StringQueryOperatorInput,
	name?:StringQueryOperatorInput,
	relativeDirectory?:StringQueryOperatorInput,
	dev?:IntQueryOperatorInput,
	mode?:IntQueryOperatorInput,
	nlink?:IntQueryOperatorInput,
	uid?:IntQueryOperatorInput,
	gid?:IntQueryOperatorInput,
	rdev?:IntQueryOperatorInput,
	blksize?:IntQueryOperatorInput,
	ino?:IntQueryOperatorInput,
	blocks?:IntQueryOperatorInput,
	atimeMs?:FloatQueryOperatorInput,
	mtimeMs?:FloatQueryOperatorInput,
	ctimeMs?:FloatQueryOperatorInput,
	birthtimeMs?:FloatQueryOperatorInput,
	atime?:DateQueryOperatorInput,
	mtime?:DateQueryOperatorInput,
	ctime?:DateQueryOperatorInput,
	birthtime?:DateQueryOperatorInput
}

export type DirectorySortInput = {
		fields?:(DirectoryFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum DirectoryFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	sourceInstanceName = "sourceInstanceName",
	absolutePath = "absolutePath",
	relativePath = "relativePath",
	extension = "extension",
	size = "size",
	prettySize = "prettySize",
	modifiedTime = "modifiedTime",
	accessTime = "accessTime",
	changeTime = "changeTime",
	birthTime = "birthTime",
	root = "root",
	dir = "dir",
	base = "base",
	ext = "ext",
	name = "name",
	relativeDirectory = "relativeDirectory",
	dev = "dev",
	mode = "mode",
	nlink = "nlink",
	uid = "uid",
	gid = "gid",
	rdev = "rdev",
	blksize = "blksize",
	ino = "ino",
	blocks = "blocks",
	atimeMs = "atimeMs",
	mtimeMs = "mtimeMs",
	ctimeMs = "ctimeMs",
	birthtimeMs = "birthtimeMs",
	atime = "atime",
	mtime = "mtime",
	ctime = "ctime",
	birthtime = "birthtime"
}

export type DirectoryConnection = {
	__typename?: "DirectoryConnection",
	totalCount:number,
	edges:DirectoryEdge[],
	nodes:Directory[],
	pageInfo:PageInfo,
	distinct:(props:{	field:DirectoryFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:DirectoryFieldsEnum}) => DirectoryGroupConnection[]
}

export type DirectoryEdge = {
	__typename?: "DirectoryEdge",
	next?:Directory,
	node:Directory,
	previous?:Directory
}

export type DirectoryGroupConnection = {
	__typename?: "DirectoryGroupConnection",
	totalCount:number,
	edges:DirectoryEdge[],
	nodes:Directory[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type AuthorsYamlSortInput = {
		fields?:(AuthorsYamlFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum AuthorsYamlFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	name = "name",
	bio = "bio",
	avatar___birthtime = "avatar___birthtime",
	avatar___birthtimeMs = "avatar___birthtimeMs",
	avatar___sourceInstanceName = "avatar___sourceInstanceName",
	avatar___absolutePath = "avatar___absolutePath",
	avatar___relativePath = "avatar___relativePath",
	avatar___extension = "avatar___extension",
	avatar___size = "avatar___size",
	avatar___prettySize = "avatar___prettySize",
	avatar___modifiedTime = "avatar___modifiedTime",
	avatar___accessTime = "avatar___accessTime",
	avatar___changeTime = "avatar___changeTime",
	avatar___birthTime = "avatar___birthTime",
	avatar___root = "avatar___root",
	avatar___dir = "avatar___dir",
	avatar___base = "avatar___base",
	avatar___ext = "avatar___ext",
	avatar___name = "avatar___name",
	avatar___relativeDirectory = "avatar___relativeDirectory",
	avatar___dev = "avatar___dev",
	avatar___mode = "avatar___mode",
	avatar___nlink = "avatar___nlink",
	avatar___uid = "avatar___uid",
	avatar___gid = "avatar___gid",
	avatar___rdev = "avatar___rdev",
	avatar___blksize = "avatar___blksize",
	avatar___ino = "avatar___ino",
	avatar___blocks = "avatar___blocks",
	avatar___atimeMs = "avatar___atimeMs",
	avatar___mtimeMs = "avatar___mtimeMs",
	avatar___ctimeMs = "avatar___ctimeMs",
	avatar___atime = "avatar___atime",
	avatar___mtime = "avatar___mtime",
	avatar___ctime = "avatar___ctime",
	avatar___publicURL = "avatar___publicURL",
	avatar___id = "avatar___id",
	avatar___parent___id = "avatar___parent___id",
	avatar___parent___parent___id = "avatar___parent___parent___id",
	avatar___parent___parent___children = "avatar___parent___parent___children",
	avatar___parent___children = "avatar___parent___children",
	avatar___parent___children___id = "avatar___parent___children___id",
	avatar___parent___children___children = "avatar___parent___children___children",
	avatar___parent___internal___content = "avatar___parent___internal___content",
	avatar___parent___internal___contentDigest = "avatar___parent___internal___contentDigest",
	avatar___parent___internal___description = "avatar___parent___internal___description",
	avatar___parent___internal___fieldOwners = "avatar___parent___internal___fieldOwners",
	avatar___parent___internal___ignoreType = "avatar___parent___internal___ignoreType",
	avatar___parent___internal___mediaType = "avatar___parent___internal___mediaType",
	avatar___parent___internal___owner = "avatar___parent___internal___owner",
	avatar___parent___internal___type = "avatar___parent___internal___type",
	avatar___children = "avatar___children",
	avatar___children___id = "avatar___children___id",
	avatar___children___parent___id = "avatar___children___parent___id",
	avatar___children___parent___children = "avatar___children___parent___children",
	avatar___children___children = "avatar___children___children",
	avatar___children___children___id = "avatar___children___children___id",
	avatar___children___children___children = "avatar___children___children___children",
	avatar___children___internal___content = "avatar___children___internal___content",
	avatar___children___internal___contentDigest = "avatar___children___internal___contentDigest",
	avatar___children___internal___description = "avatar___children___internal___description",
	avatar___children___internal___fieldOwners = "avatar___children___internal___fieldOwners",
	avatar___children___internal___ignoreType = "avatar___children___internal___ignoreType",
	avatar___children___internal___mediaType = "avatar___children___internal___mediaType",
	avatar___children___internal___owner = "avatar___children___internal___owner",
	avatar___children___internal___type = "avatar___children___internal___type",
	avatar___internal___content = "avatar___internal___content",
	avatar___internal___contentDigest = "avatar___internal___contentDigest",
	avatar___internal___description = "avatar___internal___description",
	avatar___internal___fieldOwners = "avatar___internal___fieldOwners",
	avatar___internal___ignoreType = "avatar___internal___ignoreType",
	avatar___internal___mediaType = "avatar___internal___mediaType",
	avatar___internal___owner = "avatar___internal___owner",
	avatar___internal___type = "avatar___internal___type",
	avatar___childMdx___rawBody = "avatar___childMdx___rawBody",
	avatar___childMdx___fileAbsolutePath = "avatar___childMdx___fileAbsolutePath",
	avatar___childMdx___frontmatter___title = "avatar___childMdx___frontmatter___title",
	avatar___childMdx___frontmatter___date = "avatar___childMdx___frontmatter___date",
	avatar___childMdx___frontmatter___excerpt = "avatar___childMdx___frontmatter___excerpt",
	avatar___childMdx___body = "avatar___childMdx___body",
	avatar___childMdx___excerpt = "avatar___childMdx___excerpt",
	avatar___childMdx___headings = "avatar___childMdx___headings",
	avatar___childMdx___headings___value = "avatar___childMdx___headings___value",
	avatar___childMdx___headings___depth = "avatar___childMdx___headings___depth",
	avatar___childMdx___html = "avatar___childMdx___html",
	avatar___childMdx___mdxAST = "avatar___childMdx___mdxAST",
	avatar___childMdx___tableOfContents = "avatar___childMdx___tableOfContents",
	avatar___childMdx___timeToRead = "avatar___childMdx___timeToRead",
	avatar___childMdx___wordCount___paragraphs = "avatar___childMdx___wordCount___paragraphs",
	avatar___childMdx___wordCount___sentences = "avatar___childMdx___wordCount___sentences",
	avatar___childMdx___wordCount___words = "avatar___childMdx___wordCount___words",
	avatar___childMdx___id = "avatar___childMdx___id",
	avatar___childMdx___parent___id = "avatar___childMdx___parent___id",
	avatar___childMdx___parent___children = "avatar___childMdx___parent___children",
	avatar___childMdx___children = "avatar___childMdx___children",
	avatar___childMdx___children___id = "avatar___childMdx___children___id",
	avatar___childMdx___children___children = "avatar___childMdx___children___children",
	avatar___childMdx___internal___content = "avatar___childMdx___internal___content",
	avatar___childMdx___internal___contentDigest = "avatar___childMdx___internal___contentDigest",
	avatar___childMdx___internal___description = "avatar___childMdx___internal___description",
	avatar___childMdx___internal___fieldOwners = "avatar___childMdx___internal___fieldOwners",
	avatar___childMdx___internal___ignoreType = "avatar___childMdx___internal___ignoreType",
	avatar___childMdx___internal___mediaType = "avatar___childMdx___internal___mediaType",
	avatar___childMdx___internal___owner = "avatar___childMdx___internal___owner",
	avatar___childMdx___internal___type = "avatar___childMdx___internal___type",
	avatar___childImageSharp___id = "avatar___childImageSharp___id",
	avatar___childImageSharp___fixed___base64 = "avatar___childImageSharp___fixed___base64",
	avatar___childImageSharp___fixed___tracedSVG = "avatar___childImageSharp___fixed___tracedSVG",
	avatar___childImageSharp___fixed___aspectRatio = "avatar___childImageSharp___fixed___aspectRatio",
	avatar___childImageSharp___fixed___width = "avatar___childImageSharp___fixed___width",
	avatar___childImageSharp___fixed___height = "avatar___childImageSharp___fixed___height",
	avatar___childImageSharp___fixed___src = "avatar___childImageSharp___fixed___src",
	avatar___childImageSharp___fixed___srcSet = "avatar___childImageSharp___fixed___srcSet",
	avatar___childImageSharp___fixed___srcWebp = "avatar___childImageSharp___fixed___srcWebp",
	avatar___childImageSharp___fixed___srcSetWebp = "avatar___childImageSharp___fixed___srcSetWebp",
	avatar___childImageSharp___fixed___originalName = "avatar___childImageSharp___fixed___originalName",
	avatar___childImageSharp___resolutions___base64 = "avatar___childImageSharp___resolutions___base64",
	avatar___childImageSharp___resolutions___tracedSVG = "avatar___childImageSharp___resolutions___tracedSVG",
	avatar___childImageSharp___resolutions___aspectRatio = "avatar___childImageSharp___resolutions___aspectRatio",
	avatar___childImageSharp___resolutions___width = "avatar___childImageSharp___resolutions___width",
	avatar___childImageSharp___resolutions___height = "avatar___childImageSharp___resolutions___height",
	avatar___childImageSharp___resolutions___src = "avatar___childImageSharp___resolutions___src",
	avatar___childImageSharp___resolutions___srcSet = "avatar___childImageSharp___resolutions___srcSet",
	avatar___childImageSharp___resolutions___srcWebp = "avatar___childImageSharp___resolutions___srcWebp",
	avatar___childImageSharp___resolutions___srcSetWebp = "avatar___childImageSharp___resolutions___srcSetWebp",
	avatar___childImageSharp___resolutions___originalName = "avatar___childImageSharp___resolutions___originalName",
	avatar___childImageSharp___fluid___base64 = "avatar___childImageSharp___fluid___base64",
	avatar___childImageSharp___fluid___tracedSVG = "avatar___childImageSharp___fluid___tracedSVG",
	avatar___childImageSharp___fluid___aspectRatio = "avatar___childImageSharp___fluid___aspectRatio",
	avatar___childImageSharp___fluid___src = "avatar___childImageSharp___fluid___src",
	avatar___childImageSharp___fluid___srcSet = "avatar___childImageSharp___fluid___srcSet",
	avatar___childImageSharp___fluid___srcWebp = "avatar___childImageSharp___fluid___srcWebp",
	avatar___childImageSharp___fluid___srcSetWebp = "avatar___childImageSharp___fluid___srcSetWebp",
	avatar___childImageSharp___fluid___sizes = "avatar___childImageSharp___fluid___sizes",
	avatar___childImageSharp___fluid___originalImg = "avatar___childImageSharp___fluid___originalImg",
	avatar___childImageSharp___fluid___originalName = "avatar___childImageSharp___fluid___originalName",
	avatar___childImageSharp___fluid___presentationWidth = "avatar___childImageSharp___fluid___presentationWidth",
	avatar___childImageSharp___fluid___presentationHeight = "avatar___childImageSharp___fluid___presentationHeight",
	avatar___childImageSharp___sizes___base64 = "avatar___childImageSharp___sizes___base64",
	avatar___childImageSharp___sizes___tracedSVG = "avatar___childImageSharp___sizes___tracedSVG",
	avatar___childImageSharp___sizes___aspectRatio = "avatar___childImageSharp___sizes___aspectRatio",
	avatar___childImageSharp___sizes___src = "avatar___childImageSharp___sizes___src",
	avatar___childImageSharp___sizes___srcSet = "avatar___childImageSharp___sizes___srcSet",
	avatar___childImageSharp___sizes___srcWebp = "avatar___childImageSharp___sizes___srcWebp",
	avatar___childImageSharp___sizes___srcSetWebp = "avatar___childImageSharp___sizes___srcSetWebp",
	avatar___childImageSharp___sizes___sizes = "avatar___childImageSharp___sizes___sizes",
	avatar___childImageSharp___sizes___originalImg = "avatar___childImageSharp___sizes___originalImg",
	avatar___childImageSharp___sizes___originalName = "avatar___childImageSharp___sizes___originalName",
	avatar___childImageSharp___sizes___presentationWidth = "avatar___childImageSharp___sizes___presentationWidth",
	avatar___childImageSharp___sizes___presentationHeight = "avatar___childImageSharp___sizes___presentationHeight",
	avatar___childImageSharp___original___width = "avatar___childImageSharp___original___width",
	avatar___childImageSharp___original___height = "avatar___childImageSharp___original___height",
	avatar___childImageSharp___original___src = "avatar___childImageSharp___original___src",
	avatar___childImageSharp___resize___src = "avatar___childImageSharp___resize___src",
	avatar___childImageSharp___resize___tracedSVG = "avatar___childImageSharp___resize___tracedSVG",
	avatar___childImageSharp___resize___width = "avatar___childImageSharp___resize___width",
	avatar___childImageSharp___resize___height = "avatar___childImageSharp___resize___height",
	avatar___childImageSharp___resize___aspectRatio = "avatar___childImageSharp___resize___aspectRatio",
	avatar___childImageSharp___resize___originalName = "avatar___childImageSharp___resize___originalName",
	avatar___childImageSharp___parent___id = "avatar___childImageSharp___parent___id",
	avatar___childImageSharp___parent___children = "avatar___childImageSharp___parent___children",
	avatar___childImageSharp___children = "avatar___childImageSharp___children",
	avatar___childImageSharp___children___id = "avatar___childImageSharp___children___id",
	avatar___childImageSharp___children___children = "avatar___childImageSharp___children___children",
	avatar___childImageSharp___internal___content = "avatar___childImageSharp___internal___content",
	avatar___childImageSharp___internal___contentDigest = "avatar___childImageSharp___internal___contentDigest",
	avatar___childImageSharp___internal___description = "avatar___childImageSharp___internal___description",
	avatar___childImageSharp___internal___fieldOwners = "avatar___childImageSharp___internal___fieldOwners",
	avatar___childImageSharp___internal___ignoreType = "avatar___childImageSharp___internal___ignoreType",
	avatar___childImageSharp___internal___mediaType = "avatar___childImageSharp___internal___mediaType",
	avatar___childImageSharp___internal___owner = "avatar___childImageSharp___internal___owner",
	avatar___childImageSharp___internal___type = "avatar___childImageSharp___internal___type",
	avatar___childrenAuthorsYaml = "avatar___childrenAuthorsYaml",
	avatar___childrenAuthorsYaml___id = "avatar___childrenAuthorsYaml___id",
	avatar___childrenAuthorsYaml___parent___id = "avatar___childrenAuthorsYaml___parent___id",
	avatar___childrenAuthorsYaml___parent___children = "avatar___childrenAuthorsYaml___parent___children",
	avatar___childrenAuthorsYaml___children = "avatar___childrenAuthorsYaml___children",
	avatar___childrenAuthorsYaml___children___id = "avatar___childrenAuthorsYaml___children___id",
	avatar___childrenAuthorsYaml___children___children = "avatar___childrenAuthorsYaml___children___children",
	avatar___childrenAuthorsYaml___internal___content = "avatar___childrenAuthorsYaml___internal___content",
	avatar___childrenAuthorsYaml___internal___contentDigest = "avatar___childrenAuthorsYaml___internal___contentDigest",
	avatar___childrenAuthorsYaml___internal___description = "avatar___childrenAuthorsYaml___internal___description",
	avatar___childrenAuthorsYaml___internal___fieldOwners = "avatar___childrenAuthorsYaml___internal___fieldOwners",
	avatar___childrenAuthorsYaml___internal___ignoreType = "avatar___childrenAuthorsYaml___internal___ignoreType",
	avatar___childrenAuthorsYaml___internal___mediaType = "avatar___childrenAuthorsYaml___internal___mediaType",
	avatar___childrenAuthorsYaml___internal___owner = "avatar___childrenAuthorsYaml___internal___owner",
	avatar___childrenAuthorsYaml___internal___type = "avatar___childrenAuthorsYaml___internal___type",
	avatar___childrenAuthorsYaml___name = "avatar___childrenAuthorsYaml___name",
	avatar___childrenAuthorsYaml___bio = "avatar___childrenAuthorsYaml___bio",
	avatar___childrenAuthorsYaml___avatar___birthtime = "avatar___childrenAuthorsYaml___avatar___birthtime",
	avatar___childrenAuthorsYaml___avatar___birthtimeMs = "avatar___childrenAuthorsYaml___avatar___birthtimeMs",
	avatar___childrenAuthorsYaml___avatar___sourceInstanceName = "avatar___childrenAuthorsYaml___avatar___sourceInstanceName",
	avatar___childrenAuthorsYaml___avatar___absolutePath = "avatar___childrenAuthorsYaml___avatar___absolutePath",
	avatar___childrenAuthorsYaml___avatar___relativePath = "avatar___childrenAuthorsYaml___avatar___relativePath",
	avatar___childrenAuthorsYaml___avatar___extension = "avatar___childrenAuthorsYaml___avatar___extension",
	avatar___childrenAuthorsYaml___avatar___size = "avatar___childrenAuthorsYaml___avatar___size",
	avatar___childrenAuthorsYaml___avatar___prettySize = "avatar___childrenAuthorsYaml___avatar___prettySize",
	avatar___childrenAuthorsYaml___avatar___modifiedTime = "avatar___childrenAuthorsYaml___avatar___modifiedTime",
	avatar___childrenAuthorsYaml___avatar___accessTime = "avatar___childrenAuthorsYaml___avatar___accessTime",
	avatar___childrenAuthorsYaml___avatar___changeTime = "avatar___childrenAuthorsYaml___avatar___changeTime",
	avatar___childrenAuthorsYaml___avatar___birthTime = "avatar___childrenAuthorsYaml___avatar___birthTime",
	avatar___childrenAuthorsYaml___avatar___root = "avatar___childrenAuthorsYaml___avatar___root",
	avatar___childrenAuthorsYaml___avatar___dir = "avatar___childrenAuthorsYaml___avatar___dir",
	avatar___childrenAuthorsYaml___avatar___base = "avatar___childrenAuthorsYaml___avatar___base",
	avatar___childrenAuthorsYaml___avatar___ext = "avatar___childrenAuthorsYaml___avatar___ext",
	avatar___childrenAuthorsYaml___avatar___name = "avatar___childrenAuthorsYaml___avatar___name",
	avatar___childrenAuthorsYaml___avatar___relativeDirectory = "avatar___childrenAuthorsYaml___avatar___relativeDirectory",
	avatar___childrenAuthorsYaml___avatar___dev = "avatar___childrenAuthorsYaml___avatar___dev",
	avatar___childrenAuthorsYaml___avatar___mode = "avatar___childrenAuthorsYaml___avatar___mode",
	avatar___childrenAuthorsYaml___avatar___nlink = "avatar___childrenAuthorsYaml___avatar___nlink",
	avatar___childrenAuthorsYaml___avatar___uid = "avatar___childrenAuthorsYaml___avatar___uid",
	avatar___childrenAuthorsYaml___avatar___gid = "avatar___childrenAuthorsYaml___avatar___gid",
	avatar___childrenAuthorsYaml___avatar___rdev = "avatar___childrenAuthorsYaml___avatar___rdev",
	avatar___childrenAuthorsYaml___avatar___blksize = "avatar___childrenAuthorsYaml___avatar___blksize",
	avatar___childrenAuthorsYaml___avatar___ino = "avatar___childrenAuthorsYaml___avatar___ino",
	avatar___childrenAuthorsYaml___avatar___blocks = "avatar___childrenAuthorsYaml___avatar___blocks",
	avatar___childrenAuthorsYaml___avatar___atimeMs = "avatar___childrenAuthorsYaml___avatar___atimeMs",
	avatar___childrenAuthorsYaml___avatar___mtimeMs = "avatar___childrenAuthorsYaml___avatar___mtimeMs",
	avatar___childrenAuthorsYaml___avatar___ctimeMs = "avatar___childrenAuthorsYaml___avatar___ctimeMs",
	avatar___childrenAuthorsYaml___avatar___atime = "avatar___childrenAuthorsYaml___avatar___atime",
	avatar___childrenAuthorsYaml___avatar___mtime = "avatar___childrenAuthorsYaml___avatar___mtime",
	avatar___childrenAuthorsYaml___avatar___ctime = "avatar___childrenAuthorsYaml___avatar___ctime",
	avatar___childrenAuthorsYaml___avatar___publicURL = "avatar___childrenAuthorsYaml___avatar___publicURL",
	avatar___childrenAuthorsYaml___avatar___id = "avatar___childrenAuthorsYaml___avatar___id",
	avatar___childrenAuthorsYaml___avatar___children = "avatar___childrenAuthorsYaml___avatar___children",
	avatar___childrenAuthorsYaml___avatar___childrenAuthorsYaml = "avatar___childrenAuthorsYaml___avatar___childrenAuthorsYaml",
	avatar___childrenAuthorsYaml___featured = "avatar___childrenAuthorsYaml___featured",
	avatar___childrenAuthorsYaml___social = "avatar___childrenAuthorsYaml___social",
	avatar___childrenAuthorsYaml___social___name = "avatar___childrenAuthorsYaml___social___name",
	avatar___childrenAuthorsYaml___social___url = "avatar___childrenAuthorsYaml___social___url",
	featured = "featured",
	social = "social",
	social___name = "social___name",
	social___url = "social___url"
}

export type AuthorsYamlConnection = {
	__typename?: "AuthorsYamlConnection",
	totalCount:number,
	edges:AuthorsYamlEdge[],
	nodes:AuthorsYaml[],
	pageInfo:PageInfo,
	distinct:(props:{	field:AuthorsYamlFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:AuthorsYamlFieldsEnum}) => AuthorsYamlGroupConnection[]
}

export type AuthorsYamlEdge = {
	__typename?: "AuthorsYamlEdge",
	next?:AuthorsYaml,
	node:AuthorsYaml,
	previous?:AuthorsYaml
}

export type AuthorsYamlGroupConnection = {
	__typename?: "AuthorsYamlGroupConnection",
	totalCount:number,
	edges:AuthorsYamlEdge[],
	nodes:AuthorsYaml[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}

export type AuthorSocialFilterListInput = {
		elemMatch?:AuthorSocialFilterInput
}

export type AuthorSocialFilterInput = {
		name?:StringQueryOperatorInput,
	url?:StringQueryOperatorInput
}

export type Author = {
	__typename?: "Author",
	id:string,
	parent?:Node,
	children:Node[],
	internal:Internal,
	name?:string,
	bio?:string,
	avatar?:File,
	featured?:boolean,
	social?:(AuthorSocial | undefined)[],
	authorsPage?:boolean,
	slug?:string
}

export type AuthorSocial = {
	__typename?: "AuthorSocial",
	name?:string,
	url?:string
}

export type AuthorFilterInput = {
		id?:StringQueryOperatorInput,
	parent?:NodeFilterInput,
	children?:NodeFilterListInput,
	internal?:InternalFilterInput,
	name?:StringQueryOperatorInput,
	bio?:StringQueryOperatorInput,
	avatar?:FileFilterInput,
	featured?:BooleanQueryOperatorInput,
	social?:AuthorSocialFilterListInput,
	authorsPage?:BooleanQueryOperatorInput,
	slug?:StringQueryOperatorInput
}

export type AuthorSortInput = {
		fields?:(AuthorFieldsEnum | undefined)[],
	order?:(SortOrderEnum | undefined)[]
}

export enum AuthorFieldsEnum {
	id = "id",
	parent___id = "parent___id",
	parent___parent___id = "parent___parent___id",
	parent___parent___parent___id = "parent___parent___parent___id",
	parent___parent___parent___children = "parent___parent___parent___children",
	parent___parent___children = "parent___parent___children",
	parent___parent___children___id = "parent___parent___children___id",
	parent___parent___children___children = "parent___parent___children___children",
	parent___parent___internal___content = "parent___parent___internal___content",
	parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
	parent___parent___internal___description = "parent___parent___internal___description",
	parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
	parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
	parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
	parent___parent___internal___owner = "parent___parent___internal___owner",
	parent___parent___internal___type = "parent___parent___internal___type",
	parent___children = "parent___children",
	parent___children___id = "parent___children___id",
	parent___children___parent___id = "parent___children___parent___id",
	parent___children___parent___children = "parent___children___parent___children",
	parent___children___children = "parent___children___children",
	parent___children___children___id = "parent___children___children___id",
	parent___children___children___children = "parent___children___children___children",
	parent___children___internal___content = "parent___children___internal___content",
	parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
	parent___children___internal___description = "parent___children___internal___description",
	parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
	parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
	parent___children___internal___mediaType = "parent___children___internal___mediaType",
	parent___children___internal___owner = "parent___children___internal___owner",
	parent___children___internal___type = "parent___children___internal___type",
	parent___internal___content = "parent___internal___content",
	parent___internal___contentDigest = "parent___internal___contentDigest",
	parent___internal___description = "parent___internal___description",
	parent___internal___fieldOwners = "parent___internal___fieldOwners",
	parent___internal___ignoreType = "parent___internal___ignoreType",
	parent___internal___mediaType = "parent___internal___mediaType",
	parent___internal___owner = "parent___internal___owner",
	parent___internal___type = "parent___internal___type",
	children = "children",
	children___id = "children___id",
	children___parent___id = "children___parent___id",
	children___parent___parent___id = "children___parent___parent___id",
	children___parent___parent___children = "children___parent___parent___children",
	children___parent___children = "children___parent___children",
	children___parent___children___id = "children___parent___children___id",
	children___parent___children___children = "children___parent___children___children",
	children___parent___internal___content = "children___parent___internal___content",
	children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
	children___parent___internal___description = "children___parent___internal___description",
	children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
	children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
	children___parent___internal___mediaType = "children___parent___internal___mediaType",
	children___parent___internal___owner = "children___parent___internal___owner",
	children___parent___internal___type = "children___parent___internal___type",
	children___children = "children___children",
	children___children___id = "children___children___id",
	children___children___parent___id = "children___children___parent___id",
	children___children___parent___children = "children___children___parent___children",
	children___children___children = "children___children___children",
	children___children___children___id = "children___children___children___id",
	children___children___children___children = "children___children___children___children",
	children___children___internal___content = "children___children___internal___content",
	children___children___internal___contentDigest = "children___children___internal___contentDigest",
	children___children___internal___description = "children___children___internal___description",
	children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
	children___children___internal___ignoreType = "children___children___internal___ignoreType",
	children___children___internal___mediaType = "children___children___internal___mediaType",
	children___children___internal___owner = "children___children___internal___owner",
	children___children___internal___type = "children___children___internal___type",
	children___internal___content = "children___internal___content",
	children___internal___contentDigest = "children___internal___contentDigest",
	children___internal___description = "children___internal___description",
	children___internal___fieldOwners = "children___internal___fieldOwners",
	children___internal___ignoreType = "children___internal___ignoreType",
	children___internal___mediaType = "children___internal___mediaType",
	children___internal___owner = "children___internal___owner",
	children___internal___type = "children___internal___type",
	internal___content = "internal___content",
	internal___contentDigest = "internal___contentDigest",
	internal___description = "internal___description",
	internal___fieldOwners = "internal___fieldOwners",
	internal___ignoreType = "internal___ignoreType",
	internal___mediaType = "internal___mediaType",
	internal___owner = "internal___owner",
	internal___type = "internal___type",
	name = "name",
	bio = "bio",
	avatar___birthtime = "avatar___birthtime",
	avatar___birthtimeMs = "avatar___birthtimeMs",
	avatar___sourceInstanceName = "avatar___sourceInstanceName",
	avatar___absolutePath = "avatar___absolutePath",
	avatar___relativePath = "avatar___relativePath",
	avatar___extension = "avatar___extension",
	avatar___size = "avatar___size",
	avatar___prettySize = "avatar___prettySize",
	avatar___modifiedTime = "avatar___modifiedTime",
	avatar___accessTime = "avatar___accessTime",
	avatar___changeTime = "avatar___changeTime",
	avatar___birthTime = "avatar___birthTime",
	avatar___root = "avatar___root",
	avatar___dir = "avatar___dir",
	avatar___base = "avatar___base",
	avatar___ext = "avatar___ext",
	avatar___name = "avatar___name",
	avatar___relativeDirectory = "avatar___relativeDirectory",
	avatar___dev = "avatar___dev",
	avatar___mode = "avatar___mode",
	avatar___nlink = "avatar___nlink",
	avatar___uid = "avatar___uid",
	avatar___gid = "avatar___gid",
	avatar___rdev = "avatar___rdev",
	avatar___blksize = "avatar___blksize",
	avatar___ino = "avatar___ino",
	avatar___blocks = "avatar___blocks",
	avatar___atimeMs = "avatar___atimeMs",
	avatar___mtimeMs = "avatar___mtimeMs",
	avatar___ctimeMs = "avatar___ctimeMs",
	avatar___atime = "avatar___atime",
	avatar___mtime = "avatar___mtime",
	avatar___ctime = "avatar___ctime",
	avatar___publicURL = "avatar___publicURL",
	avatar___id = "avatar___id",
	avatar___parent___id = "avatar___parent___id",
	avatar___parent___parent___id = "avatar___parent___parent___id",
	avatar___parent___parent___children = "avatar___parent___parent___children",
	avatar___parent___children = "avatar___parent___children",
	avatar___parent___children___id = "avatar___parent___children___id",
	avatar___parent___children___children = "avatar___parent___children___children",
	avatar___parent___internal___content = "avatar___parent___internal___content",
	avatar___parent___internal___contentDigest = "avatar___parent___internal___contentDigest",
	avatar___parent___internal___description = "avatar___parent___internal___description",
	avatar___parent___internal___fieldOwners = "avatar___parent___internal___fieldOwners",
	avatar___parent___internal___ignoreType = "avatar___parent___internal___ignoreType",
	avatar___parent___internal___mediaType = "avatar___parent___internal___mediaType",
	avatar___parent___internal___owner = "avatar___parent___internal___owner",
	avatar___parent___internal___type = "avatar___parent___internal___type",
	avatar___children = "avatar___children",
	avatar___children___id = "avatar___children___id",
	avatar___children___parent___id = "avatar___children___parent___id",
	avatar___children___parent___children = "avatar___children___parent___children",
	avatar___children___children = "avatar___children___children",
	avatar___children___children___id = "avatar___children___children___id",
	avatar___children___children___children = "avatar___children___children___children",
	avatar___children___internal___content = "avatar___children___internal___content",
	avatar___children___internal___contentDigest = "avatar___children___internal___contentDigest",
	avatar___children___internal___description = "avatar___children___internal___description",
	avatar___children___internal___fieldOwners = "avatar___children___internal___fieldOwners",
	avatar___children___internal___ignoreType = "avatar___children___internal___ignoreType",
	avatar___children___internal___mediaType = "avatar___children___internal___mediaType",
	avatar___children___internal___owner = "avatar___children___internal___owner",
	avatar___children___internal___type = "avatar___children___internal___type",
	avatar___internal___content = "avatar___internal___content",
	avatar___internal___contentDigest = "avatar___internal___contentDigest",
	avatar___internal___description = "avatar___internal___description",
	avatar___internal___fieldOwners = "avatar___internal___fieldOwners",
	avatar___internal___ignoreType = "avatar___internal___ignoreType",
	avatar___internal___mediaType = "avatar___internal___mediaType",
	avatar___internal___owner = "avatar___internal___owner",
	avatar___internal___type = "avatar___internal___type",
	avatar___childMdx___rawBody = "avatar___childMdx___rawBody",
	avatar___childMdx___fileAbsolutePath = "avatar___childMdx___fileAbsolutePath",
	avatar___childMdx___frontmatter___title = "avatar___childMdx___frontmatter___title",
	avatar___childMdx___frontmatter___date = "avatar___childMdx___frontmatter___date",
	avatar___childMdx___frontmatter___excerpt = "avatar___childMdx___frontmatter___excerpt",
	avatar___childMdx___body = "avatar___childMdx___body",
	avatar___childMdx___excerpt = "avatar___childMdx___excerpt",
	avatar___childMdx___headings = "avatar___childMdx___headings",
	avatar___childMdx___headings___value = "avatar___childMdx___headings___value",
	avatar___childMdx___headings___depth = "avatar___childMdx___headings___depth",
	avatar___childMdx___html = "avatar___childMdx___html",
	avatar___childMdx___mdxAST = "avatar___childMdx___mdxAST",
	avatar___childMdx___tableOfContents = "avatar___childMdx___tableOfContents",
	avatar___childMdx___timeToRead = "avatar___childMdx___timeToRead",
	avatar___childMdx___wordCount___paragraphs = "avatar___childMdx___wordCount___paragraphs",
	avatar___childMdx___wordCount___sentences = "avatar___childMdx___wordCount___sentences",
	avatar___childMdx___wordCount___words = "avatar___childMdx___wordCount___words",
	avatar___childMdx___id = "avatar___childMdx___id",
	avatar___childMdx___parent___id = "avatar___childMdx___parent___id",
	avatar___childMdx___parent___children = "avatar___childMdx___parent___children",
	avatar___childMdx___children = "avatar___childMdx___children",
	avatar___childMdx___children___id = "avatar___childMdx___children___id",
	avatar___childMdx___children___children = "avatar___childMdx___children___children",
	avatar___childMdx___internal___content = "avatar___childMdx___internal___content",
	avatar___childMdx___internal___contentDigest = "avatar___childMdx___internal___contentDigest",
	avatar___childMdx___internal___description = "avatar___childMdx___internal___description",
	avatar___childMdx___internal___fieldOwners = "avatar___childMdx___internal___fieldOwners",
	avatar___childMdx___internal___ignoreType = "avatar___childMdx___internal___ignoreType",
	avatar___childMdx___internal___mediaType = "avatar___childMdx___internal___mediaType",
	avatar___childMdx___internal___owner = "avatar___childMdx___internal___owner",
	avatar___childMdx___internal___type = "avatar___childMdx___internal___type",
	avatar___childImageSharp___id = "avatar___childImageSharp___id",
	avatar___childImageSharp___fixed___base64 = "avatar___childImageSharp___fixed___base64",
	avatar___childImageSharp___fixed___tracedSVG = "avatar___childImageSharp___fixed___tracedSVG",
	avatar___childImageSharp___fixed___aspectRatio = "avatar___childImageSharp___fixed___aspectRatio",
	avatar___childImageSharp___fixed___width = "avatar___childImageSharp___fixed___width",
	avatar___childImageSharp___fixed___height = "avatar___childImageSharp___fixed___height",
	avatar___childImageSharp___fixed___src = "avatar___childImageSharp___fixed___src",
	avatar___childImageSharp___fixed___srcSet = "avatar___childImageSharp___fixed___srcSet",
	avatar___childImageSharp___fixed___srcWebp = "avatar___childImageSharp___fixed___srcWebp",
	avatar___childImageSharp___fixed___srcSetWebp = "avatar___childImageSharp___fixed___srcSetWebp",
	avatar___childImageSharp___fixed___originalName = "avatar___childImageSharp___fixed___originalName",
	avatar___childImageSharp___resolutions___base64 = "avatar___childImageSharp___resolutions___base64",
	avatar___childImageSharp___resolutions___tracedSVG = "avatar___childImageSharp___resolutions___tracedSVG",
	avatar___childImageSharp___resolutions___aspectRatio = "avatar___childImageSharp___resolutions___aspectRatio",
	avatar___childImageSharp___resolutions___width = "avatar___childImageSharp___resolutions___width",
	avatar___childImageSharp___resolutions___height = "avatar___childImageSharp___resolutions___height",
	avatar___childImageSharp___resolutions___src = "avatar___childImageSharp___resolutions___src",
	avatar___childImageSharp___resolutions___srcSet = "avatar___childImageSharp___resolutions___srcSet",
	avatar___childImageSharp___resolutions___srcWebp = "avatar___childImageSharp___resolutions___srcWebp",
	avatar___childImageSharp___resolutions___srcSetWebp = "avatar___childImageSharp___resolutions___srcSetWebp",
	avatar___childImageSharp___resolutions___originalName = "avatar___childImageSharp___resolutions___originalName",
	avatar___childImageSharp___fluid___base64 = "avatar___childImageSharp___fluid___base64",
	avatar___childImageSharp___fluid___tracedSVG = "avatar___childImageSharp___fluid___tracedSVG",
	avatar___childImageSharp___fluid___aspectRatio = "avatar___childImageSharp___fluid___aspectRatio",
	avatar___childImageSharp___fluid___src = "avatar___childImageSharp___fluid___src",
	avatar___childImageSharp___fluid___srcSet = "avatar___childImageSharp___fluid___srcSet",
	avatar___childImageSharp___fluid___srcWebp = "avatar___childImageSharp___fluid___srcWebp",
	avatar___childImageSharp___fluid___srcSetWebp = "avatar___childImageSharp___fluid___srcSetWebp",
	avatar___childImageSharp___fluid___sizes = "avatar___childImageSharp___fluid___sizes",
	avatar___childImageSharp___fluid___originalImg = "avatar___childImageSharp___fluid___originalImg",
	avatar___childImageSharp___fluid___originalName = "avatar___childImageSharp___fluid___originalName",
	avatar___childImageSharp___fluid___presentationWidth = "avatar___childImageSharp___fluid___presentationWidth",
	avatar___childImageSharp___fluid___presentationHeight = "avatar___childImageSharp___fluid___presentationHeight",
	avatar___childImageSharp___sizes___base64 = "avatar___childImageSharp___sizes___base64",
	avatar___childImageSharp___sizes___tracedSVG = "avatar___childImageSharp___sizes___tracedSVG",
	avatar___childImageSharp___sizes___aspectRatio = "avatar___childImageSharp___sizes___aspectRatio",
	avatar___childImageSharp___sizes___src = "avatar___childImageSharp___sizes___src",
	avatar___childImageSharp___sizes___srcSet = "avatar___childImageSharp___sizes___srcSet",
	avatar___childImageSharp___sizes___srcWebp = "avatar___childImageSharp___sizes___srcWebp",
	avatar___childImageSharp___sizes___srcSetWebp = "avatar___childImageSharp___sizes___srcSetWebp",
	avatar___childImageSharp___sizes___sizes = "avatar___childImageSharp___sizes___sizes",
	avatar___childImageSharp___sizes___originalImg = "avatar___childImageSharp___sizes___originalImg",
	avatar___childImageSharp___sizes___originalName = "avatar___childImageSharp___sizes___originalName",
	avatar___childImageSharp___sizes___presentationWidth = "avatar___childImageSharp___sizes___presentationWidth",
	avatar___childImageSharp___sizes___presentationHeight = "avatar___childImageSharp___sizes___presentationHeight",
	avatar___childImageSharp___original___width = "avatar___childImageSharp___original___width",
	avatar___childImageSharp___original___height = "avatar___childImageSharp___original___height",
	avatar___childImageSharp___original___src = "avatar___childImageSharp___original___src",
	avatar___childImageSharp___resize___src = "avatar___childImageSharp___resize___src",
	avatar___childImageSharp___resize___tracedSVG = "avatar___childImageSharp___resize___tracedSVG",
	avatar___childImageSharp___resize___width = "avatar___childImageSharp___resize___width",
	avatar___childImageSharp___resize___height = "avatar___childImageSharp___resize___height",
	avatar___childImageSharp___resize___aspectRatio = "avatar___childImageSharp___resize___aspectRatio",
	avatar___childImageSharp___resize___originalName = "avatar___childImageSharp___resize___originalName",
	avatar___childImageSharp___parent___id = "avatar___childImageSharp___parent___id",
	avatar___childImageSharp___parent___children = "avatar___childImageSharp___parent___children",
	avatar___childImageSharp___children = "avatar___childImageSharp___children",
	avatar___childImageSharp___children___id = "avatar___childImageSharp___children___id",
	avatar___childImageSharp___children___children = "avatar___childImageSharp___children___children",
	avatar___childImageSharp___internal___content = "avatar___childImageSharp___internal___content",
	avatar___childImageSharp___internal___contentDigest = "avatar___childImageSharp___internal___contentDigest",
	avatar___childImageSharp___internal___description = "avatar___childImageSharp___internal___description",
	avatar___childImageSharp___internal___fieldOwners = "avatar___childImageSharp___internal___fieldOwners",
	avatar___childImageSharp___internal___ignoreType = "avatar___childImageSharp___internal___ignoreType",
	avatar___childImageSharp___internal___mediaType = "avatar___childImageSharp___internal___mediaType",
	avatar___childImageSharp___internal___owner = "avatar___childImageSharp___internal___owner",
	avatar___childImageSharp___internal___type = "avatar___childImageSharp___internal___type",
	avatar___childrenAuthorsYaml = "avatar___childrenAuthorsYaml",
	avatar___childrenAuthorsYaml___id = "avatar___childrenAuthorsYaml___id",
	avatar___childrenAuthorsYaml___parent___id = "avatar___childrenAuthorsYaml___parent___id",
	avatar___childrenAuthorsYaml___parent___children = "avatar___childrenAuthorsYaml___parent___children",
	avatar___childrenAuthorsYaml___children = "avatar___childrenAuthorsYaml___children",
	avatar___childrenAuthorsYaml___children___id = "avatar___childrenAuthorsYaml___children___id",
	avatar___childrenAuthorsYaml___children___children = "avatar___childrenAuthorsYaml___children___children",
	avatar___childrenAuthorsYaml___internal___content = "avatar___childrenAuthorsYaml___internal___content",
	avatar___childrenAuthorsYaml___internal___contentDigest = "avatar___childrenAuthorsYaml___internal___contentDigest",
	avatar___childrenAuthorsYaml___internal___description = "avatar___childrenAuthorsYaml___internal___description",
	avatar___childrenAuthorsYaml___internal___fieldOwners = "avatar___childrenAuthorsYaml___internal___fieldOwners",
	avatar___childrenAuthorsYaml___internal___ignoreType = "avatar___childrenAuthorsYaml___internal___ignoreType",
	avatar___childrenAuthorsYaml___internal___mediaType = "avatar___childrenAuthorsYaml___internal___mediaType",
	avatar___childrenAuthorsYaml___internal___owner = "avatar___childrenAuthorsYaml___internal___owner",
	avatar___childrenAuthorsYaml___internal___type = "avatar___childrenAuthorsYaml___internal___type",
	avatar___childrenAuthorsYaml___name = "avatar___childrenAuthorsYaml___name",
	avatar___childrenAuthorsYaml___bio = "avatar___childrenAuthorsYaml___bio",
	avatar___childrenAuthorsYaml___avatar___birthtime = "avatar___childrenAuthorsYaml___avatar___birthtime",
	avatar___childrenAuthorsYaml___avatar___birthtimeMs = "avatar___childrenAuthorsYaml___avatar___birthtimeMs",
	avatar___childrenAuthorsYaml___avatar___sourceInstanceName = "avatar___childrenAuthorsYaml___avatar___sourceInstanceName",
	avatar___childrenAuthorsYaml___avatar___absolutePath = "avatar___childrenAuthorsYaml___avatar___absolutePath",
	avatar___childrenAuthorsYaml___avatar___relativePath = "avatar___childrenAuthorsYaml___avatar___relativePath",
	avatar___childrenAuthorsYaml___avatar___extension = "avatar___childrenAuthorsYaml___avatar___extension",
	avatar___childrenAuthorsYaml___avatar___size = "avatar___childrenAuthorsYaml___avatar___size",
	avatar___childrenAuthorsYaml___avatar___prettySize = "avatar___childrenAuthorsYaml___avatar___prettySize",
	avatar___childrenAuthorsYaml___avatar___modifiedTime = "avatar___childrenAuthorsYaml___avatar___modifiedTime",
	avatar___childrenAuthorsYaml___avatar___accessTime = "avatar___childrenAuthorsYaml___avatar___accessTime",
	avatar___childrenAuthorsYaml___avatar___changeTime = "avatar___childrenAuthorsYaml___avatar___changeTime",
	avatar___childrenAuthorsYaml___avatar___birthTime = "avatar___childrenAuthorsYaml___avatar___birthTime",
	avatar___childrenAuthorsYaml___avatar___root = "avatar___childrenAuthorsYaml___avatar___root",
	avatar___childrenAuthorsYaml___avatar___dir = "avatar___childrenAuthorsYaml___avatar___dir",
	avatar___childrenAuthorsYaml___avatar___base = "avatar___childrenAuthorsYaml___avatar___base",
	avatar___childrenAuthorsYaml___avatar___ext = "avatar___childrenAuthorsYaml___avatar___ext",
	avatar___childrenAuthorsYaml___avatar___name = "avatar___childrenAuthorsYaml___avatar___name",
	avatar___childrenAuthorsYaml___avatar___relativeDirectory = "avatar___childrenAuthorsYaml___avatar___relativeDirectory",
	avatar___childrenAuthorsYaml___avatar___dev = "avatar___childrenAuthorsYaml___avatar___dev",
	avatar___childrenAuthorsYaml___avatar___mode = "avatar___childrenAuthorsYaml___avatar___mode",
	avatar___childrenAuthorsYaml___avatar___nlink = "avatar___childrenAuthorsYaml___avatar___nlink",
	avatar___childrenAuthorsYaml___avatar___uid = "avatar___childrenAuthorsYaml___avatar___uid",
	avatar___childrenAuthorsYaml___avatar___gid = "avatar___childrenAuthorsYaml___avatar___gid",
	avatar___childrenAuthorsYaml___avatar___rdev = "avatar___childrenAuthorsYaml___avatar___rdev",
	avatar___childrenAuthorsYaml___avatar___blksize = "avatar___childrenAuthorsYaml___avatar___blksize",
	avatar___childrenAuthorsYaml___avatar___ino = "avatar___childrenAuthorsYaml___avatar___ino",
	avatar___childrenAuthorsYaml___avatar___blocks = "avatar___childrenAuthorsYaml___avatar___blocks",
	avatar___childrenAuthorsYaml___avatar___atimeMs = "avatar___childrenAuthorsYaml___avatar___atimeMs",
	avatar___childrenAuthorsYaml___avatar___mtimeMs = "avatar___childrenAuthorsYaml___avatar___mtimeMs",
	avatar___childrenAuthorsYaml___avatar___ctimeMs = "avatar___childrenAuthorsYaml___avatar___ctimeMs",
	avatar___childrenAuthorsYaml___avatar___atime = "avatar___childrenAuthorsYaml___avatar___atime",
	avatar___childrenAuthorsYaml___avatar___mtime = "avatar___childrenAuthorsYaml___avatar___mtime",
	avatar___childrenAuthorsYaml___avatar___ctime = "avatar___childrenAuthorsYaml___avatar___ctime",
	avatar___childrenAuthorsYaml___avatar___publicURL = "avatar___childrenAuthorsYaml___avatar___publicURL",
	avatar___childrenAuthorsYaml___avatar___id = "avatar___childrenAuthorsYaml___avatar___id",
	avatar___childrenAuthorsYaml___avatar___children = "avatar___childrenAuthorsYaml___avatar___children",
	avatar___childrenAuthorsYaml___avatar___childrenAuthorsYaml = "avatar___childrenAuthorsYaml___avatar___childrenAuthorsYaml",
	avatar___childrenAuthorsYaml___featured = "avatar___childrenAuthorsYaml___featured",
	avatar___childrenAuthorsYaml___social = "avatar___childrenAuthorsYaml___social",
	avatar___childrenAuthorsYaml___social___name = "avatar___childrenAuthorsYaml___social___name",
	avatar___childrenAuthorsYaml___social___url = "avatar___childrenAuthorsYaml___social___url",
	featured = "featured",
	social = "social",
	social___name = "social___name",
	social___url = "social___url",
	authorsPage = "authorsPage",
	slug = "slug"
}

export type AuthorConnection = {
	__typename?: "AuthorConnection",
	totalCount:number,
	edges:AuthorEdge[],
	nodes:Author[],
	pageInfo:PageInfo,
	distinct:(props:{	field:AuthorFieldsEnum}) => string[],
	group:(props:{	skip?:number,	limit?:number,	field:AuthorFieldsEnum}) => AuthorGroupConnection[]
}

export type AuthorEdge = {
	__typename?: "AuthorEdge",
	next?:Author,
	node:Author,
	previous?:Author
}

export type AuthorGroupConnection = {
	__typename?: "AuthorGroupConnection",
	totalCount:number,
	edges:AuthorEdge[],
	nodes:Author[],
	pageInfo:PageInfo,
	field:string,
	fieldValue?:string
}





















export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }



type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type IsType<M, T, Z, L> = T extends M ? Z : L;
type IsScalar<T, Z, L> = IsType<string | boolean | number, T, Z, L>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type AliasedReturnType<T> = {
    [P in keyof T]: T[P];
  } &
  Record<
    string,
    {
      [P in keyof T]: T[P];
    }
  >;

type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
type OfType<T> = T extends Array<infer R> ? R : T;
type FirstArgument<F extends AnyFunc> = OfType<ArgsType<F>>;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}

export type State<T> = {
  readonly [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<AliasedReturnType<State<R>>>
    : T[P] extends AnyFunc
    ? AliasedReturnType<State<ReturnType<T[P]>>>
    : IsScalar<T[P], T[P], AliasedReturnType<State<T[P]>>>;
};

export type PlainObject<T> = {
  [P in keyof T]?: T[P] extends (Array<infer R> | undefined)
    ? Array<PlainObject<R>>
    : T[P] extends AnyFunc
    ?  PlainObject<ReturnType<T[P]>>
    : IsScalar<T[P], T[P], PlainObject<T[P]>>;
};

type ResolveValue<T> = T extends Array<infer R>
  ? SelectionSet<R>
  : T extends AnyFunc
  ? IsScalar<
      ReturnType<T>,
      [FirstArgument<T>],
      [FirstArgument<T>, SelectionSet<OfType<ReturnType<T>>>]
    >
  : IsScalar<T, T extends undefined ? undefined : true, SelectionSet<T>>;

export type SelectionSet<T> = IsScalar<
  T,  T extends undefined ? undefined : true
,  AliasType<
    {
      [P in keyof T]?: ResolveValue<T[P]>;
    }
  >>;

type GraphQLReturner<T> = T extends Array<infer R> ? SelectionSet<R> : SelectionSet<T>;

type OperationToGraphQL<V,T> = (o: GraphQLReturner<V>) => Promise<AliasedReturnType<State<T>>>;

type ResolveApiField<T> = T extends Array<infer R>
  ? IsScalar<R, R, State<R>>
  : T extends AnyFunc
  ? IsScalar<OfType<ReturnType<T>>, T, State<OfType<ReturnType<T>>>>
  : IsScalar<T, T, State<T>>;

type ApiFieldToGraphQL<V,T> = (o: ResolveValue<V>) => Promise<ResolveApiField<T>>;

type fetchOptions = ArgsType<typeof fetch>;



export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return `"${value}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a).replace(/\"([^{^,^\n^\"]*)\":([^{^,^\n^\"]*)/g, '$1:$2');

const queryConstruct = (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) => `${t.toLowerCase()}${buildQuery(t, o)}`;

const fullChainConstruct = (options: fetchOptions) => (t: 'Query' | 'Mutation' | 'Subscription') => (o: Record<any, any>) =>
  apiFetch(options, queryConstruct(t)(o));

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};


const apiFetch = (options: fetchOptions, query: string) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then((response: any) => response.json() as Promise<GraphQLResponse>)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then((response: any) => response.json() as Promise<GraphQLResponse>)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Chain = (...options: fetchOptions) => ({
  Query: ((o: any) =>
    fullChainConstruct(options)('Query')(o).then(
      (response: any) => response as State<Query>
    )) as OperationToGraphQL<ValueTypes["Query"],Query>
});
export const Api = (...options: fetchOptions) => ({
  Query: {
      imageSharp: ((o:any) =>
      fullChainConstruct(options)('Query')({
        imageSharp: o
      }).then((response:any) => response.imageSharp)) as ApiFieldToGraphQL<ValueTypes['Query']['imageSharp'],Query['imageSharp']>,
allImageSharp: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allImageSharp: o
      }).then((response:any) => response.allImageSharp)) as ApiFieldToGraphQL<ValueTypes['Query']['allImageSharp'],Query['allImageSharp']>,
file: ((o:any) =>
      fullChainConstruct(options)('Query')({
        file: o
      }).then((response:any) => response.file)) as ApiFieldToGraphQL<ValueTypes['Query']['file'],Query['file']>,
allFile: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allFile: o
      }).then((response:any) => response.allFile)) as ApiFieldToGraphQL<ValueTypes['Query']['allFile'],Query['allFile']>,
mdx: ((o:any) =>
      fullChainConstruct(options)('Query')({
        mdx: o
      }).then((response:any) => response.mdx)) as ApiFieldToGraphQL<ValueTypes['Query']['mdx'],Query['mdx']>,
allMdx: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allMdx: o
      }).then((response:any) => response.allMdx)) as ApiFieldToGraphQL<ValueTypes['Query']['allMdx'],Query['allMdx']>,
article: ((o:any) =>
      fullChainConstruct(options)('Query')({
        article: o
      }).then((response:any) => response.article)) as ApiFieldToGraphQL<ValueTypes['Query']['article'],Query['article']>,
allArticle: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allArticle: o
      }).then((response:any) => response.allArticle)) as ApiFieldToGraphQL<ValueTypes['Query']['allArticle'],Query['allArticle']>,
markdownRemark: ((o:any) =>
      fullChainConstruct(options)('Query')({
        markdownRemark: o
      }).then((response:any) => response.markdownRemark)) as ApiFieldToGraphQL<ValueTypes['Query']['markdownRemark'],Query['markdownRemark']>,
allMarkdownRemark: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allMarkdownRemark: o
      }).then((response:any) => response.allMarkdownRemark)) as ApiFieldToGraphQL<ValueTypes['Query']['allMarkdownRemark'],Query['allMarkdownRemark']>,
sitePage: ((o:any) =>
      fullChainConstruct(options)('Query')({
        sitePage: o
      }).then((response:any) => response.sitePage)) as ApiFieldToGraphQL<ValueTypes['Query']['sitePage'],Query['sitePage']>,
allSitePage: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allSitePage: o
      }).then((response:any) => response.allSitePage)) as ApiFieldToGraphQL<ValueTypes['Query']['allSitePage'],Query['allSitePage']>,
sitePlugin: ((o:any) =>
      fullChainConstruct(options)('Query')({
        sitePlugin: o
      }).then((response:any) => response.sitePlugin)) as ApiFieldToGraphQL<ValueTypes['Query']['sitePlugin'],Query['sitePlugin']>,
allSitePlugin: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allSitePlugin: o
      }).then((response:any) => response.allSitePlugin)) as ApiFieldToGraphQL<ValueTypes['Query']['allSitePlugin'],Query['allSitePlugin']>,
site: ((o:any) =>
      fullChainConstruct(options)('Query')({
        site: o
      }).then((response:any) => response.site)) as ApiFieldToGraphQL<ValueTypes['Query']['site'],Query['site']>,
allSite: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allSite: o
      }).then((response:any) => response.allSite)) as ApiFieldToGraphQL<ValueTypes['Query']['allSite'],Query['allSite']>,
directory: ((o:any) =>
      fullChainConstruct(options)('Query')({
        directory: o
      }).then((response:any) => response.directory)) as ApiFieldToGraphQL<ValueTypes['Query']['directory'],Query['directory']>,
allDirectory: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allDirectory: o
      }).then((response:any) => response.allDirectory)) as ApiFieldToGraphQL<ValueTypes['Query']['allDirectory'],Query['allDirectory']>,
authorsYaml: ((o:any) =>
      fullChainConstruct(options)('Query')({
        authorsYaml: o
      }).then((response:any) => response.authorsYaml)) as ApiFieldToGraphQL<ValueTypes['Query']['authorsYaml'],Query['authorsYaml']>,
allAuthorsYaml: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allAuthorsYaml: o
      }).then((response:any) => response.allAuthorsYaml)) as ApiFieldToGraphQL<ValueTypes['Query']['allAuthorsYaml'],Query['allAuthorsYaml']>,
author: ((o:any) =>
      fullChainConstruct(options)('Query')({
        author: o
      }).then((response:any) => response.author)) as ApiFieldToGraphQL<ValueTypes['Query']['author'],Query['author']>,
allAuthor: ((o:any) =>
      fullChainConstruct(options)('Query')({
        allAuthor: o
      }).then((response:any) => response.allAuthor)) as ApiFieldToGraphQL<ValueTypes['Query']['allAuthor'],Query['allAuthor']>
  }
});
export const Zeus = {
  Query: (o:GraphQLReturner<ValueTypes["Query"]>) => queryConstruct('Query')(o)
};
export const Cast = {
  Query: (o:any) => o as State<Query>
};
  

export const Gql = Chain('http://localhost:8000/__graphql')