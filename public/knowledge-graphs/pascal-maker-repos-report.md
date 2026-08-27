# Graph Report - combined  (2026-08-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 3666 nodes · 7045 edges · 262 communities (187 shown, 75 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 271 edges (avg confidence: 0.92)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- package.json
- index.js
- Trainer
- robot.py
- GroundedSection
- _app.js
- MyDocument
- next.config.js
- automatic_mask_generator.py
- VideoWorkerContext
- DemoVideoEditor.tsx
- ObjectsToolbar.tsx
- useScreenSize
- SAM2Model.ts
- SAM2VideoPredictor
- Stats.ts
- SAM2VideoPredictor
- VideoWorkerContext.ts
- index.d.ts
- tokens.stylex.ts
- optimizer.py
- schema.py
- RelayEnvironmentProvider.tsx
- MobileEffectsToolbar.tsx
- trainer.py
- Video.tsx
- VideoWorkerBridge.ts
- demo/atoms.ts
- VideoFilmstrip.tsx
- MLP
- SAM2ImagePredictor
- DemoVideoGalleryModal.tsx
- LayerNorm2d
- VideoDatapoint
- vos_raw_dataset.py
- RepeatFactorWrapper
- BaseGLEffect
- ObjectsToolbarBottomActions.tsx
- Tracklet
- sam2_utils.py
- VideoWorkerBridge
- checkpoint_utils.py
- InferenceAPI
- Effects.ts
- misc.py
- Video
- inference/data_types.py
- Attention
- .val_epoch
- app.py
- LazySegments
- SAM2Base
- BatchedVideoDatapoint
- VideoEvaluator
- server/app.py
- logger.py
- Tensor
- SAM2Model
- transformer.py
- vos_inference.py
- qwensam2agent.py
- EffectUtils.ts
- SAM2DemoApp.tsx
- vos_dataset.py
- devDependencies
- connected_components.cu
- mask.ts
- Toolbar.tsx
- loss_fns.py
- makedir
- SAVDataset
- EvidenceCollection
- VideoEditorUtils.ts
- PromptEncoder
- process_video
- scripts
- useDownloadVideo.ts
- VideoDecoder.ts
- SettingsContextProvider.tsx
- build_sam.py
- RoPEAttention
- MaskDecoder
- MemMeter
- get_world_size
- MedicalVLMAgent
- distributed.py
- FpnNeck
- DemoConfig.tsx
- useSettingsContext
- relay
- SAM2Transforms
- MultiplePNGSegmentLoader
- get_rank
- .prettierrc.json
- ErrorReport.tsx
- MedicalAgent
- BuildExtensionIgnoreErrors
- dependencies
- sav_frame_extraction_submitit.py
- ApprovableInput.tsx
- EventEmitter
- Lecturer
- AverageMeter
- merge-schemas.ts
- ITracker
- DemoVideoGalleryModalQuery.graphql.ts
- GetLinkOptionShareVideoMutation.graphql.ts
- Student
- GroundedBullet
- ComposeAPI
- GatherLayer
- GitHubIcon.tsx
- MessagesSnackbar.tsx
- babel-plugin-relay
- babel-plugin-strip-invariant
- array
- eslint
- eslint-config-prettier
- Logger.ts
- eslint-plugin-import
- istftnet.py
- @graphql-tools/load-files
- @graphql-tools/merge
- SelectedFrameHelper
- immer
- immutability-helper
- invariant
- VideoEditor.tsx
- localforage
- TrackletSwimlane.tsx
- @monaco-editor/react
- mp4box
- postcss
- prettier
- pts
- react
- react-daisyui
- react-device-detect
- react-dom
- react-dropzone
- react-photo-album
- react-pts-canvas
- react-relay
- react-router-dom
- relay-compiler
- relay-runtime
- serialize-error
- DemoLogger.ts
- use-immer
- MultipartStream.ts
- sass
- strip-ansi
- tailwindcss
- pipeline.py
- tsx
- @types/dom-webcodecs
- @types/node
- @types/react
- @types/react-relay
- @types/relay-runtime
- typescript
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- vite
- vite-plugin-babel
- vite-plugin-relay
- vite-plugin-stylex-dev
- @vitejs/plugin-react
- test_smart_discovery.py
- EvidenceItem
- controller.py
- CustomerConfig
- powerpoint_writer.py
- get_postgres_db
- read_notion_page
- revisor.py
- discovery_orchestrator.py
- ReportState
- frontend/package.json
- notion_to_pptx.py
- SourceModuleHnNSF
- CustomerConfig
- StaticVideoPlayer.tsx
- AdainResBlk1d
- daisyui
- eslint-import-resolver-alias
- build_image.sh
- entrypoint.sh
- format.sh
- generate_requirements.sh
- validate.sh
- venv_setup.sh
- agentos-docker
- Board
- http_apis/main.py
- models/birds.py
- RobotRepository
- eslint-plugin-prettier
- FunctionalityRepository
- wire-prototype/package.json
- _get
- manifest.json
- Product
- xrehab_viz.py
- compilerOptions
- dataviz_5.py
- lab05_birds/gradio_app.py
- Image
- eslint.config.js
- .__init__
- modules.py
- kokoro.py
- KokoroPipeline
- TestKokoroPipeline
- load_model
- .generate
- interpolate
- LSTM
- _InstanceNorm
- eslint-plugin-react
- eslint-plugin-react-refresh
- graphql
- postinstall-postinstall
- @types/react-dom

## God Nodes (most connected - your core abstractions)
1. `Tracklet` - 52 edges
2. `EffectFrameContext` - 45 edges
3. `useVideo()` - 45 edges
4. `VideoWorkerContext` - 44 edges
5. `Trainer` - 41 edges
6. `CustomerConfig` - 39 edges
7. `VideoWorkerBridge` - 36 edges
8. `BaseGLEffect` - 35 edges
9. `EffectInit` - 32 edges
10. `SAM2Base` - 31 edges

## Surprising Connections (you probably didn't know these)
- `initialize_sam2()` --uses--> `SAM2AutomaticMaskGenerator`  [INFERRED]
  app.py → sam2/sam2/automatic_mask_generator.py
- `initialize_sam2()` --uses--> `SAM2AutomaticMaskGenerator`  [INFERRED]
  qwensam2agent.py → sam2/sam2/automatic_mask_generator.py
- `analyze_with_evidence()` --uses--> `EvidenceCollection`  [INFERRED]
  agents/content_analyzer.py → shared/evidence.py
- `_apply_customer_constraints()` --uses--> `EvidenceCollection`  [INFERRED]
  agents/content_analyzer.py → shared/evidence.py
- `_create_fallback_sections()` --uses--> `EvidenceCollection`  [INFERRED]
  agents/content_analyzer.py → shared/evidence.py

## Import Cycles
- 3-file cycle: `sam2/demo/frontend/src/settings/SettingsContextProvider.tsx -> sam2/demo/frontend/src/settings/SettingsModal.tsx -> sam2/demo/frontend/src/settings/useSettingsContext.tsx -> sam2/demo/frontend/src/settings/SettingsContextProvider.tsx`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/PixelateEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/BackgroundBlurEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/BackgroundBlurEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/SobelEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/BurstGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/BurstGLEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/ScopeGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/ArrowGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/ArrowGLEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/CutoutGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/CutoutGLEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/EraseForegroundGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/GradientEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/NoisyMaskEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/OverlayEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/PixelateMaskGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/ReplaceGLEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/VibrantMaskEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/BackgroundTextEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/BackgroundTextEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/BackgroundTextEffect.ts -> sam2/demo/frontend/src/demo/DemoConfig.tsx -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/BackgroundTextEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/DesaturateEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/DesaturateEffect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/EraseBackgroundEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`
- 3-file cycle: `sam2/demo/frontend/src/common/components/video/effects/Effect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effects.ts -> sam2/demo/frontend/src/common/components/video/effects/OriginalEffect.ts -> sam2/demo/frontend/src/common/components/video/effects/Effect.ts`

## Communities (262 total, 75 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (35): autoprefixer, eslint, eslint-config-next, @formspree/react, dependencies, @formspree/react, next, react (+27 more)

### Community 1 - "index.js"
Cohesion: 0.15
Nodes (11): navigationItems, organizations, personJsonLd, portfolioItems, profilePageJsonLd, TODO: Replace this fallback with the specific MRI-scans project link., serviceCards, socialLinks (+3 more)

### Community 2 - "Trainer"
Cohesion: 0.14
Nodes (8): CheckpointConf, CudaConf, DistributedConf, LoggingConf, Any, Trainer supporting the DDP training strategies., Initializes counters for elapsed time and eta., Trainer

### Community 3 - "robot.py"
Cohesion: 0.19
Nodes (16): create_db_and_tables(), on_startup(), on_event, root(), _seed_data(), Functionality, FunctionalityBase, FunctionalityRead (+8 more)

### Community 4 - "GroundedSection"
Cohesion: 0.13
Nodes (18): analyze_and_generate_sections(), analyze_content(), analyze_with_evidence(), _apply_customer_constraints(), _create_fallback_sections(), Any, CustomerConfig, Content Analyzer Agent (Production Grade)… (+10 more)

### Community 13 - "automatic_mask_generator.py"
Cohesion: 0.06
Nodes (42): ItemsView, Any, ndarray, no_grad, Generates masks for the given image. Arguments: image (np.ndarray): The image…, Removes small disconnected regions and holes in masks, then reruns box NMS to…, Using a SAM 2 model, generates masks for the entire image. Generates a grid of…, SAM2AutomaticMaskGenerator (+34 more)

### Community 15 - "DemoVideoEditor.tsx"
Cohesion: 0.06
Nodes (37): styles, TrackletsAnnotation(), useTracklets(), getButtonStyles(), PlaybackButton(), CloseSessionInput, node, useCloseSessionBeforeUnloadMutation (+29 more)

### Community 16 - "ObjectsToolbar.tsx"
Cohesion: 0.07
Nodes (28): FirstClickView(), LimitNotice(), MobileObjectsToolbar(), Props, MobileObjectsToolbarHeader(), ObjectActions(), ObjectPlaceholder(), Props (+20 more)

### Community 17 - "useScreenSize"
Cohesion: 0.06
Nodes (38): GradientBorder(), Props, ResponsiveButton(), DemoVideoGallery(), Props, styles, VideoPhotoData, DemoVideoGalleryQuery (+30 more)

### Community 18 - "SAM2Model.ts"
Cohesion: 0.04
Nodes (45): AddPointsInput, node, SAM2ModelAddNewPointsMutation, SAM2ModelAddNewPointsMutation$data, SAM2ModelAddNewPointsMutation$variables, CancelPropagateInVideoInput, node, SAM2ModelCancelPropagateInVideoMutation (+37 more)

### Community 19 - "SAM2VideoPredictor"
Cohesion: 0.07
Nodes (27): inference_mode, Tensor, Identical to the corresponding method in the parent (SAM2VideoPredictor), but…, Map client-side object id to model-side object index., Map model-side object index to client-side object id., Get the total number of unique object ids received so far in this session., Add new points to a frame., The predictor class to handle user interactions and manage inference states. (+19 more)

### Community 20 - "Stats.ts"
Cohesion: 0.13
Nodes (12): EnableStatsRequest, uuidv4(), GetMemoryStatsRequest, GetStatsCanvasRequest, MemoryStatsResponse, Panel, Request, Response (+4 more)

### Community 21 - "SAM2VideoPredictor"
Cohesion: 0.08
Nodes (25): inference_mode, `maskmem_pos_enc` is the same across frames and objects, so we cache it as a…, Remove an object id from the tracking state. If strict is True, we check…, Remove the non-conditioning memory around the input frame. When users provide…, Map client-side object id to model-side object index., Map model-side object index to client-side object id., Get the total number of unique object ids received so far in this session., Add new points to a frame. (+17 more)

### Community 22 - "VideoWorkerContext.ts"
Cohesion: 0.06
Nodes (40): EffectActionPoint, context, EffectUpdateEvent, FilmstripEvent, LoadStartEvent, RenderingErrorEvent, FrameInfo, getEvenlySpacedItems() (+32 more)

### Community 23 - "index.d.ts"
Cohesion: 0.05
Nodes (24): av1CBox, avcCBox, Box, BoxParser, ContainerBox, DataStream, hvcCBox, MP4ArrayBuffer (+16 more)

### Community 24 - "tokens.stylex.ts"
Cohesion: 0.08
Nodes (27): Props, GradientTypes, bluePinkGradient, fullGradient, Props, styles, Props, styles (+19 more)

### Community 25 - "optimizer.py"
Cohesion: 0.07
Nodes (32): DictConfig, Parameter, construct_optimizer(), get_full_parameter_name(), get_module_cls_to_param_names(), GradientClipper, layer_decay_param_modifier(), map_scheduler_cfgs_to_param_groups() (+24 more)

### Community 26 - "schema.py"
Cohesion: 0.13
Nodes (32): AddPointsInput, CancelPropagateInVideoInput, ClearPointsInFrameInput, ClearPointsInVideoInput, CloseSessionInput, Info, input, RemoveObjectInput (+24 more)

### Community 27 - "RelayEnvironmentProvider.tsx"
Cohesion: 0.18
Nodes (8): ErrorFallback(), useReportError(), LoadingMessage(), fetchGraphQL(), createEnvironment(), createFetchRelay(), OnevisionRelayEnvironmentProvider(), Props

### Community 28 - "MobileEffectsToolbar.tsx"
Cohesion: 0.09
Nodes (33): BackgroundEffects(), EffectsCarousel(), EffectsToolbar(), Props, EffectsToolbarBottomActions(), EffectsToolbarHeader(), backgroundEffects, DemoEffect (+25 more)

### Community 29 - "trainer.py"
Cohesion: 0.12
Nodes (19): OptimAMPConf, OptimConf, collect_dict_keys(), DurationMeter, get_amp_type(), get_machine_local_and_dist_rank(), get_resume_checkpoint(), human_readable_time() (+11 more)

### Community 30 - "Video.tsx"
Cohesion: 0.06
Nodes (5): onStreamingDone(), play(), Props, styles, VideoWorkerEventMap

### Community 31 - "VideoWorkerBridge.ts"
Cohesion: 0.09
Nodes (41): AddPointsEvent, ClearPointsInVideoEvent, Metadata, PauseEvent, PlayEvent, SessionStartedEvent, SessionStartFailedEvent, StreamingCompletedEvent (+33 more)

### Community 32 - "demo/atoms.ts"
Cohesion: 0.07
Nodes (34): AddObjectButton(), Props, styles, MobileObjectsList(), Props, styles, Props, PointsToggle() (+26 more)

### Community 33 - "VideoFilmstrip.tsx"
Cohesion: 0.13
Nodes (17): selectedFrameHelperAtom, drawFilmstrip(), drawMarker(), getPointerPosition(), getTimeFromFrame(), preventDefault(), useDisableScrolling(), PADDING_BOTTOM (+9 more)

### Community 34 - "MLP"
Cohesion: 0.10
Nodes (18): do_pool(), Hiera, MultiScaleAttention, MultiScaleBlock, Module, Tensor, Reference: https://arxiv.org/abs/2306.00989, PatchEmbed (+10 more)

### Community 35 - "SAM2ImagePredictor"
Cohesion: 0.14
Nodes (13): device, Image, ndarray, no_grad, Tensor, Calculates the image embeddings for the provided image batch, allowing masks to…, This function is very similar to predict(...), however it is used for batched…, Predict masks for the given input prompts, using the currently set image.… (+5 more)

### Community 36 - "DemoVideoGalleryModal.tsx"
Cohesion: 0.12
Nodes (15): ChangeVideoModal(), Props, DefaultVideoGalleryModalTrigger(), DemoVideoGalleryModal(), closeModal(), handleOpenVideoGalleryModal(), handleUploadVideoStart(), openModal() (+7 more)

### Community 37 - "LayerNorm2d"
Cohesion: 0.14
Nodes (10): CXBlock, Fuser, MaskDownSampler, MemoryEncoder, Tensor, Progressively downsample a mask by total_stride, each time by stride. Note that…, r"""ConvNeXt Block. There are two equivalent implementations: (1) DwConv ->…, get_clones() (+2 more)

### Community 38 - "VideoDatapoint"
Cohesion: 0.10
Nodes (12): ColorJitter, hflip(), NormalizeAPI, RandomAffine, RandomGrayscale, RandomHorizontalFlip, RandomResizeAPI, The mask is required for this transform. if consistent_transform if True, then… (+4 more)

### Community 39 - "vos_raw_dataset.py"
Cohesion: 0.09
Nodes (13): JSONRawDataset, PNGRawDataset, Given a VOSVideo object, return the mask tensors., Dataset where the annotation in the format of SA-V json files, SA1BRawDataset, VOSFrame, VOSRawDataset, VOSVideo (+5 more)

### Community 40 - "RepeatFactorWrapper"
Cohesion: 0.08
Nodes (16): DataLoader, MixedDataLoader, Dataset, FloatTensor, Args: dataloaders (List[DataLoader]): List of DataLoaders to be mixed.…, Sample a dataloader to sample from based on mixing probabilities. If one of the…, Args: datasets (List[Dataset]): List of Datasets to be mixed. batch_sizes…, TorchTrainMixedDataset (+8 more)

### Community 41 - "BaseGLEffect"
Cohesion: 0.05
Nodes (16): ArrowGLEffect, BackgroundBlurEffect, BaseGLEffect, BurstGLEffect, CutoutGLEffect, EffectInit, EraseForegroundGLEffect, NoisyMaskEffect (+8 more)

### Community 42 - "ObjectsToolbarBottomActions.tsx"
Cohesion: 0.09
Nodes (25): ClearAllPointsInVideoButton(), handleRestart(), CloseSessionButton(), Props, Props, PrimaryCTAButton(), Props, TrackAndPlayButton() (+17 more)

### Community 43 - "Tracklet"
Cohesion: 0.15
Nodes (9): hexToRgb(), EffectFrameContext, GradientEffect, Tracklet, findIndexByTrackletId(), generateLUTDATA(), load3DLUT(), normalizeBounds() (+1 more)

### Community 44 - "sam2_utils.py"
Cohesion: 0.15
Nodes (16): array, Fuse the current frame's visual feature map with previous memory., get_1d_sine_pe(), get_next_point(), Sample a noised version of the top left and bottom right corners of a given…, Select up to `max_cond_frame_num` conditioning frames from `cond_frame_outputs`…, Sample `num_pt` random points (along with their labels) independently from the…, Sample 1 random point (along with its label) from the center of each error… (+8 more)

### Community 45 - "VideoWorkerBridge"
Cohesion: 0.08
Nodes (6): CreateWorkerBridgeFunction, DEFAULT_OPTIONS, Options, useVideoWorker(), WorkerFactory, VideoWorkerBridge

### Community 46 - "checkpoint_utils.py"
Cohesion: 0.11
Nodes (24): assert_skipped_parameters_are_frozen(), check_load_state_dict_errors(), CkptExcludeKernel, exclude_params_matching_unix_pattern(), filter_params_matching_unix_pattern(), get_state_dict(), _get_state_dict_summary(), load_checkpoint() (+16 more)

### Community 47 - "InferenceAPI"
Cohesion: 0.13
Nodes (16): ClearPointsInFrameRequest, ClearPointsInVideoRequest, ClearPointsInVideoResponse, CloseSessionRequest, PropagateDataResponse, PropagateDataValue, InferenceAPI, ndarray (+8 more)

### Community 48 - "Effects.ts"
Cohesion: 0.11
Nodes (13): BackgroundTextEffect, DesaturateEffect, AbstractEffect, Effect, EffectLayers, EffectMask, EffectComboItem, EffectsCombo (+5 more)

### Community 49 - "misc.py"
Cohesion: 0.15
Nodes (15): AsyncVideoFrameLoader, concat_points(), fill_holes_in_mask_scores(), get_connected_components(), _load_img_as_tensor(), load_video_frames(), load_video_frames_from_jpg_images(), load_video_frames_from_video_file() (+7 more)

### Community 50 - "Video"
Cohesion: 0.10
Nodes (19): connection, PageInfo, PathLike, field, Video, get_video(), preload_data(), Preload data including gallery videos and their posters. (+11 more)

### Community 51 - "inference/data_types.py"
Cohesion: 0.22
Nodes (24): AddMaskRequest, AddPointsRequest, BaseRequest, CancelPorpagateResponse, CancelPropagateInVideoRequest, ClearPointsInFrameRequest, ClearPointsInVideoRequest, ClearPointsInVideoResponse (+16 more)

### Community 52 - "Attention"
Cohesion: 0.18
Nodes (8): Attention, Module, Tensor, A transformer block with four layers: (1) self-attention of sparse inputs, (2)…, An attention layer that allows for downscaling the size of the embedding after…, A transformer decoder that attends to an input image using queries whose…, Args: image_embedding (torch.Tensor): image to attend to. Should be shape B x…, TwoWayAttentionBlock

### Community 53 - ".val_epoch"
Cohesion: 0.16
Nodes (5): Save a checkpoint while guarding against the job being killed in the middle of…, unwrap_ddp_if_wrapped(), barrier(), Wrapper over torch.distributed.barrier, returns without waiting if the…, ProgressMeter

### Community 54 - "app.py"
Cohesion: 0.12
Nodes (23): automatic_mask_overlay(), check_and_install_sam2(), clean_text(), create_ui(), get_device(), get_model_device(), initialize_sam2(), load_qwen_model_and_processor() (+15 more)

### Community 55 - "LazySegments"
Cohesion: 0.11
Nodes (9): Exception, EvalSampler, RandomUniformSampler, VOS Sampler for evaluation: sampling all the frames and all the objects in a…, Sampling all the frames and all the objects, SampledFramesAndObjects, VOSSampler, LazySegments (+1 more)

### Community 56 - "SAM2Base"
Cohesion: 0.12
Nodes (11): Tensor, Build SAM-style prompt encoder and mask decoder., Forward SAM prompt encoders and mask heads. Inputs: - backbone_features: image…, Directly turn binary `mask_inputs` into a output mask logits without using SAM.…, Get the image feature on the input batch., Prepare and flatten visual features., Encode the current image and its prediction into a memory feature., Whether to use multimask output in the SAM head. (+3 more)

### Community 57 - "BatchedVideoDatapoint"
Cohesion: 0.11
Nodes (12): IntTensor, Compute the image backbone features on the fly for the given img_ids., Prepare input mask, point or box prompts. Optionally, we allow tracking from a…, Forward video tracking on each frame (and sample correction clicks)., SAM2Train, BatchedVideoDatapoint, FloatTensor, This class represents a batch of videos with associated annotations and… (+4 more)

### Community 58 - "VideoEvaluator"
Cohesion: 0.12
Nodes (14): benchmark(), Evaluator, get_iou(), ndarray, Scan the folder structure of the video and return a list of folders for…, Consolidate the results of all the objects from the video into one dictionary., From a segmentation, compute a binary boundary map with 1 pixel wide…, Compute and accumulate metrics for a single frame (mask/gt pair) (+6 more)

### Community 59 - "server/app.py"
Cohesion: 0.14
Nodes (12): GraphQLView, Request, route, gen_track_with_mask_stream(), healthy(), MyGraphQLView, propagate_in_video(), Any (+4 more)

### Community 60 - "logger.py"
Cohesion: 0.08
Nodes (21): _cached_log_stream(), Logger, make_tensorboard_logger(), Any, A simple logger for TensorBoard., Add multiple scalar values to TensorBoard. Args: payload (dict): dictionary of…, Add scalar data to TensorBoard. Args: name (string): tag name used to group…, Add hyperparameter data to TensorBoard. Args: hparams (dict): dictionary of… (+13 more)

### Community 61 - "Tensor"
Cohesion: 0.18
Nodes (21): ReduceOp, all_gather_tensor(), all_reduce_max(), all_reduce_mean(), all_reduce_min(), all_reduce_op(), all_reduce_sum(), broadcast() (+13 more)

### Community 63 - "transformer.py"
Cohesion: 0.13
Nodes (14): apply_rotary_enc(), compute_axial_cis(), init_t_xy(), PositionEmbeddingRandom, PositionEmbeddingSine, no_grad, Tensor, Positional encoding using random spatial frequencies. (+6 more)

### Community 64 - "vos_inference.py"
Cohesion: 0.16
Nodes (19): autocast, get_per_obj_mask(), load_ann_png(), load_masks_from_dir(), main(), put_per_obj_mask(), inference_mode, Run VOS inference on a single video with the given predictor. (+11 more)

### Community 65 - "qwensam2agent.py"
Cohesion: 0.14
Nodes (16): automatic_mask_overlay(), clean_text(), get_device(), get_model_device(), initialize_sam2(), MedicalVLMAgent, Image, ndarray (+8 more)

### Community 66 - "EffectUtils.ts"
Cohesion: 0.12
Nodes (8): backgroundEffects, DemoEffect, EffectLayer, highlightEffects, MaskCanvas, MaskRenderingData, moreEffects, EraseForegroundEffect

### Community 67 - "SAM2DemoApp.tsx"
Cohesion: 0.19
Nodes (11): LoadingStateScreen(), Props, styles, DemoErrorFallback(), DemoSuspenseFallback(), DemoPageWrapper(), isBrowserSupported(), REQUIRED_WINDOW_APIS (+3 more)

### Community 68 - "vos_dataset.py"
Cohesion: 0.15
Nodes (14): load_images(), Image, Tensor, Constructs a VideoDatapoint sample to pass to transforms, tensor_2_PIL(), VOSDataset, BatchedVideoMetaData, collate_fn() (+6 more)

### Community 69 - "devDependencies"
Cohesion: 0.18
Nodes (11): autoprefixer, eslint-import-resolver-typescript, eslint-plugin-react-hooks, devDependencies, autoprefixer, eslint-import-resolver-typescript, eslint-plugin-react-hooks, @tailwindcss/typography (+3 more)

### Community 70 - "connected_components.cu"
Cohesion: 0.18
Nodes (18): __global__, compression(), __device__, Tensor, final_counting(), final_labeling(), find(), find_n_compress() (+10 more)

### Community 71 - "mask.ts"
Cohesion: 0.16
Nodes (15): BB, encode(), _frString(), Masks, RLE, rleDecode(), rleEncode(), rleFrString() (+7 more)

### Community 72 - "Toolbar.tsx"
Cohesion: 0.11
Nodes (13): MoreOptionsToolbar(), Props, DesktopToolbar(), Props, MobileToolbar(), Toolbar(), Props, ToolbarHeaderWrapper() (+5 more)

### Community 73 - "loss_fns.py"
Cohesion: 0.17
Nodes (11): dice_loss(), iou_loss(), MultiStepMultiMasksAndIous, Tensor, This class computes the multi-step multi-mask and IoU losses. Args:…, Compute the losses related to the masks: the focal loss and the dice loss. and…, Compute the DICE loss, similar to generalized IOU for masks Args: inputs: A…, Loss used in RetinaNet for dense detection: https://arxiv.org/abs/1708.02002.… (+3 more)

### Community 74 - "makedir"
Cohesion: 0.20
Nodes (12): add_pythonpath_to_sys_path(), format_exception(), main(), Set up slurm job info, A callable which is passed to submitit to launch the jobs., single_node_runner(), single_proc_run(), SubmititRunner (+4 more)

### Community 75 - "SAVDataset"
Cohesion: 0.17
Nodes (10): decode_video(), ndarray, Get the frames and annotations for video., Visualize the annotations on the annotated_frame_id. If show_manual is True,…, Decode the video and return the RGB frames, SAVDataset is a class to load the SAV dataset and visualize the annotations., Args: sav_dir: the directory of the SAV dataset annot_sample_rate: the sampling…, Read the frames and downsample them to align with the annotations. (+2 more)

### Community 76 - "EvidenceCollection"
Cohesion: 0.16
Nodes (17): EvidenceCollection, extract_evidence_from_content(), Extract evidence items from raw content. Parses markdown-like content and…, Collection of evidence items with lookup methods., Merge another EvidenceCollection into this one., _generate_markdown(), _generate_powerpoint(), Any (+9 more)

### Community 77 - "VideoEditorUtils.ts"
Cohesion: 0.22
Nodes (9): generateThumbnail(), getCanvas(), getDataURLFromImageData(), getThumbnailImageData(), getThumbnailImageDataOld(), Mask, convertVideoFrameToImageData(), findBoundingBox() (+1 more)

### Community 78 - "PromptEncoder"
Cohesion: 0.25
Nodes (7): PromptEncoder, device, Tensor, Gets the batch size of the output given the batch size of the input prompts., Embeds different types of prompts, returning both sparse and dense embeddings.…, Returns the positional encoding used to encode point prompts, applied to a…, Embeds point prompts.

### Community 79 - "process_video"
Cohesion: 0.26
Nodes (11): get_file_hash(), _get_start_sec_duration_sec(), process_video(), Receive a video file and store it in the configured S3 bucket., Process file upload including video trimming and content moderation checks.…, get_video_metadata(), normalize_video(), dataclass_json (+3 more)

### Community 80 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, merge-schemas, preview, relay

### Community 81 - "useDownloadVideo.ts"
Cohesion: 0.18
Nodes (13): DownloadOption(), ShareSection(), getFileName(), handleSaveVideo(), DownloadingState, State, useDownloadVideo(), download() (+5 more)

### Community 82 - "VideoDecoder.ts"
Cohesion: 0.18
Nodes (12): decode(), decodeInternal(), decodeStream(), ImageFrame, encode(), roundToNearestEven(), cloneFrame(), FileStream (+4 more)

### Community 83 - "SettingsContextProvider.tsx"
Cohesion: 0.18
Nodes (12): App(), INFERENCE_API_ENDPOINT, VIDEO_API_ENDPOINT, DemoAppWrapper(), ContextProps, Props, SettingsContextProvider(), Action (+4 more)

### Community 84 - "build_sam.py"
Cohesion: 0.17
Nodes (10): Load a pretrained model from the Hugging Face hub. Arguments: model_id (str):…, build_sam2(), build_sam2_hf(), build_sam2_video_predictor(), build_sam2_video_predictor_hf(), _hf_download(), _load_checkpoint(), Load a pretrained model from the Hugging Face hub. Arguments: model_id (str):… (+2 more)

### Community 85 - "RoPEAttention"
Cohesion: 0.21
Nodes (8): MemoryAttention, MemoryAttentionLayer, Module, Tensor, get_activation_fn(), Return an activation function given a string, Attention with rotary position encoding., RoPEAttention

### Community 86 - "MaskDecoder"
Cohesion: 0.21
Nodes (8): MaskDecoder, Module, Tensor, Predict masks given image and prompt embeddings. Arguments: image_embeddings…, Predicts masks. See 'forward' for more details., Compute stability scores of the mask logits based on the IoU between upper and…, When outputting a single mask, if the stability score from the current single-…, Predicts masks given an image and prompt embeddings, using a transformer…

### Community 88 - "get_world_size"
Cohesion: 0.20
Nodes (12): all_gather(), all_gather_batch(), all_gather_batch_with_grad(), all_gather_via_filesys(), _get_global_gloo_group(), get_world_size(), Run all_gather on arbitrary picklable data (not necessarily tensors) Args:…, Return a process group based on gloo backend, containing all the ranks The… (+4 more)

### Community 89 - "MedicalVLMAgent"
Cohesion: 0.22
Nodes (8): cache_resource, load_model_and_processor(), main(), MedicalVLMAgent, Image, Loads the Qwen2.5-VL-7B-Instruct model and processor. Forces usage of MPS if…, A Qwen-based Vision+Language model agent specialized for medical Q&A. Uses a…, Build Qwen-style messages, optionally including user-uploaded image. Then run…

### Community 90 - "distributed.py"
Cohesion: 0.18
Nodes (5): DistributedDataParallel, create_new_process_group(), init_distributed_data_parallel_model(), Module, Creates process groups of a gives `group_size` and returns process group that…

### Community 91 - "FpnNeck"
Cohesion: 0.24
Nodes (6): FpnNeck, ImageEncoder, Module, Tensor, A modified variant of Feature Pyramid Network (FPN) neck (we remove output conv…, Initialize the neck :param trunk: the backbone :param position_encoding: the…

### Community 92 - "DemoConfig.tsx"
Cohesion: 0.18
Nodes (10): ABOUT_URL, AIDEMOS_URL, BLOG_URL, DEFAULT_EFFECT_LAYERS, demoObjectLimit, EffectLayers, EMAIL_ADDRESS, PROJECT_GITHUB_URL (+2 more)

### Community 93 - "useSettingsContext"
Cohesion: 0.24
Nodes (9): DEMO_FRIENDLY_NAME, RootLayout(), styles, SAMVSettings(), SettingsContext, Config, Props, SettingsConfig (+1 more)

### Community 94 - "relay"
Cohesion: 0.22
Nodes (9): **/__generated__/**, **/__mocks__/**, **/node_modules/**, relay, eagerEsModules, exclude, language, schema (+1 more)

### Community 95 - "SAM2Transforms"
Cohesion: 0.17
Nodes (6): Uses SAM-2 to calculate the image embedding for an image, and then allow…, Tensor, Expects a torch tensor with length 2 in the last dimension. The coordinates can…, Expects a tensor of shape Bx4. The coordinates can be in absolute image or…, Perform PostProcessing on output masks., SAM2Transforms

### Community 96 - "MultiplePNGSegmentLoader"
Cohesion: 0.28
Nodes (4): MultiplePNGSegmentLoader, video_png_root: the folder contains all the masks stored in png…, load single png from the disk (path: f'{self.obj_id}/{frame_id:05d}.png') Args:…, load multiple png masks from the disk (path: f'{obj_id}/{frame_id:05d}.png')…

### Community 97 - "get_rank"
Cohesion: 0.22
Nodes (9): broadcast_object(), get_rank(), is_main_process(), is_primary(), Any, Returns True if this is rank 0 of a distributed training job OR if it is a…, Simple wrapper for correctly getting rank in both distributed / non-distributed…, Broadcast an object from a source to all workers. Args: obj: Object to… (+1 more)

### Community 98 - ".prettierrc.json"
Cohesion: 0.25
Nodes (7): arrowParens, bracketSameLine, bracketSpacing, endOfLine, singleQuote, tabWidth, trailingComma

### Community 99 - "ErrorReport.tsx"
Cohesion: 0.25
Nodes (3): ErrorReport(), Props, getErrorTitle()

### Community 100 - "MedicalAgent"
Cohesion: 0.38
Nodes (4): AssistantAgent, main(), MedicalAgent, OpenAIChatCompletionClient

### Community 102 - "dependencies"
Cohesion: 0.12
Nodes (17): @carbon/icons-react, @heroicons/react, jotai, jotai-immer, monaco-editor, react-error-boundary, dependencies, @carbon/icons-react (+9 more)

### Community 103 - "sav_frame_extraction_submitit.py"
Cohesion: 0.38
Nodes (4): Path, decode_video(), extract_frames(), submitit_launch()

### Community 104 - "ApprovableInput.tsx"
Cohesion: 0.38
Nodes (5): Props, Tooltip(), ApprovableInput(), getStep(), Props

### Community 106 - "Lecturer"
Cohesion: 0.26
Nodes (10): Lecturer, BaseModel, create_lecturer(), delete_lecturer(), getAllLecturers(), getLecturerByName(), getLecturerByTrack(), delete (+2 more)

### Community 107 - "AverageMeter"
Cohesion: 0.14
Nodes (8): get_human_readable_count(), print_model_summary(), Module, Prints the model and the number of parameters in the model. # Multiple packages…, Abbreviates an integer number with K, M, B, T for thousands, millions, billions…, Run the forward / backward, AverageMeter, Computes and stores the average and current value

### Community 108 - "merge-schemas.ts"
Cohesion: 0.33
Nodes (5): __dirname, __filename, loadedFiles, printedTypeDefs, typeDefs

### Community 110 - "DemoVideoGalleryModalQuery.graphql.ts"
Cohesion: 0.40
Nodes (4): DemoVideoGalleryModalQuery, DemoVideoGalleryModalQuery$data, DemoVideoGalleryModalQuery$variables, node

### Community 111 - "GetLinkOptionShareVideoMutation.graphql.ts"
Cohesion: 0.40
Nodes (4): GetLinkOptionShareVideoMutation, GetLinkOptionShareVideoMutation$data, GetLinkOptionShareVideoMutation$variables, node

### Community 112 - "Student"
Cohesion: 0.29
Nodes (9): BaseModel, Student, create_student(), delete_student(), getAllStudents(), getStudentByName(), getStudentByTrack(), delete (+1 more)

### Community 114 - "GroundedBullet"
Cohesion: 0.15
Nodes (10): GroundedBullet, BaseModel, A bullet point with mandatory evidence grounding., Check if bullet has at least one evidence reference., Format bullet with evidence references., Add a grounded bullet point., Test that bullets without evidence are flagged., Test that validation catches ungrounded bullets. (+2 more)

### Community 115 - "ComposeAPI"
Cohesion: 0.21
Nodes (3): ComposeAPI, random_mosaic_frame(), RandomMosaicVideoAPI

### Community 118 - "MessagesSnackbar.tsx"
Cohesion: 0.27
Nodes (8): MessagesSnackbar(), styles, Message, messageAtom, MessageType, useExpireMessage(), EnqueueOption, State

### Community 121 - "array"
Cohesion: 0.23
Nodes (7): compute_norm(), array, Compute the p-norm of a tensor along specified dimensions. Args: x: Input array…, Applies weight normalization to the input tensor. Weight normalization…, f0_values: (batchsize, length, dim) where dim indicates fundamental tone and…, SineGen, weight_norm()

### Community 124 - "Logger.ts"
Cohesion: 0.24
Nodes (5): LOG_LEVEL, ConsoleLogger, LogFn, Logger, LogLevel

### Community 126 - "istftnet.py"
Cohesion: 0.25
Nodes (5): get_padding(), leaky_relu(), mlx_istft(), mlx_stft(), MLXSTFT

### Community 133 - "VideoEditor.tsx"
Cohesion: 0.28
Nodes (7): videoAtom, ControlsProps, InteractionLayerProps, Props, styles, VideoEditor(), VideoRef

### Community 136 - "TrackletSwimlane.tsx"
Cohesion: 0.32
Nodes (7): getSwimlaneSegments(), Props, styles, SwimlineSegment, TrackletSwimlane(), useSelectedFrameHelper(), DatalessMask

### Community 154 - "DemoLogger.ts"
Cohesion: 0.29
Nodes (5): RenderingErrorType, DemoEventMap, DemoLogger, LoggerInterface, UploadSourceType

### Community 156 - "MultipartStream.ts"
Cohesion: 0.29
Nodes (6): blankLine, compareArrays(), decoder, encoder, multipartStream(), processBuf()

### Community 160 - "pipeline.py"
Cohesion: 0.48
Nodes (4): _espeak_data_is_available(), _load_espeak_fallback(), _load_espeak_module(), # TODO: Is -3 an appropriate offset?

### Community 189 - "test_smart_discovery.py"
Cohesion: 0.08
Nodes (23): Tests for Smart Discovery (Production Grade)…, Test that evidence is extracted with IDs., Test evidence search functionality., Test section with no evidence creates open questions., Test that missing must_include concepts are detected., Test terminology mapping., Test slide budget constraints., Test smart discovery with technical input. (+15 more)

### Community 190 - "EvidenceItem"
Cohesion: 0.12
Nodes (9): EvidenceItem, A single piece of evidence extracted from source content. Every factual…, Format as inline reference for markdown., Format as full citation for evidence footer., Add evidence item and return its ID., Get evidence item by ID., Get multiple evidence items by IDs., Search evidence items by keywords. (+1 more)

### Community 191 - "controller.py"
Cohesion: 0.10
Nodes (27): _cap(), fill_template(), _filter_evidence(), _generate_title_and_summary(), _get_client(), Anthropic, CustomerConfig, Discovery Controller ==================== Orchestrates template-driven slot… (+19 more)

### Community 192 - "CustomerConfig"
Cohesion: 0.09
Nodes (22): LogRecord, _detect_section(), load_customer_config_from_notion(), _parse_config_content(), parse_config_from_text(), CustomerConfig, Customer Config Loader ====================== Loads CustomerConfig from a…, Map a heading string to one of our known config sections. (+14 more)

### Community 193 - "powerpoint_writer.py"
Cohesion: 0.09
Nodes (29): create_powerpoint(), ensure_template_available(), generate_powerpoint_from_markdown(), list_template_layouts(), parse_markdown_to_slides(), Any, PowerPoint Writer Agent ======================= Converts markdown report…, Parse markdown content into slide structures using Sweetspot layouts. Args:… (+21 more)

### Community 194 - "get_postgres_db"
Cohesion: 0.11
Nodes (15): load_default_documents(), Knowledge Agent =============== An agent that answers questions using a…, Load default documents into the knowledge base., MCP Agent ========= An agent that uses MCP tools to answer questions. Run:…, Notion Agent ============ An agent that manages your Notion workspace. Run:…, Pal - Personal Agent that Learns ================================ Your AI-…, AgentOS ======= The main entry point for AgentOS. Run: python -m app.main, Database Module =============== Database connection utilities. (+7 more)

### Community 195 - "read_notion_page"
Cohesion: 0.11
Nodes (26): create_notion_mcp_tools(), extract_page_id(), get_page_content_direct(), is_page_allowed(), NotionAccessError, Notion Reader Agent =================== Reads Notion pages using MCP (Model…, Extract Notion page ID from URL or return as-is if already an ID. Returns the…, Fetch and render child blocks of a non-page block (toggle, callout, synced… (+18 more)

### Community 196 - "revisor.py"
Cohesion: 0.13
Nodes (17): _check_slide_budget(), enforce_slide_budget(), Any, CustomerConfig, Revisor Agent (Production Grade) ================================ Post-drafting…, Revise sections to enforce grounding rules. Args: sections: List of sections to…, Revise a single section., Check if sections fit within slide budget. (+9 more)

### Community 197 - "discovery_orchestrator.py"
Cohesion: 0.10
Nodes (23): generate_feedback_questions(), Generate feedback questions for a section., draft_section(), Section Drafter Agent ===================== Drafts report sections following a…, Draft a single report section. Args: section_title: The H3 heading for this…, extract_evidence_for_section(), extract_h3_sections(), extract_section_structure() (+15 more)

### Community 198 - "ReportState"
Cohesion: 0.08
Nodes (26): Shared modules for the Discovery Solution workflow., ChangelogEntry, BaseModel, Report State Models =================== Pydantic models for managing the…, State for a single report section., Entry in the report changelog., Full state for the Discovery Solution report generation. Persisted across…, Get the current section being worked on. (+18 more)

### Community 199 - "frontend/package.json"
Cohesion: 0.33
Nodes (5): name, private, resolutions, wrap-ansi, version

### Community 200 - "notion_to_pptx.py"
Cohesion: 0.29
Nodes (9): create_pptx(), notion_to_pptx(), parse_notion_content(), Any, Path, Notion to PowerPoint (Simple Mode) ================================== Directly…, Create PowerPoint from parsed sections. Returns (path, slide_count) or (None,…, Convert Notion page directly to PowerPoint. No LLM analysis - preserves… (+1 more)

### Community 201 - "SourceModuleHnNSF"
Cohesion: 0.40
Nodes (3): SourceModule for hn-nsf SourceModule(sampling_rate, harmonic_num=0,…, Sine_source, noise_source = SourceModuleHnNSF(F0_sampled) F0_sampled…, SourceModuleHnNSF

### Community 202 - "CustomerConfig"
Cohesion: 0.29
Nodes (4): CustomerConfig, Any, Get sections based on project type or custom mandatory sections., Customer-specific configuration for report generation. Supports different…

### Community 203 - "StaticVideoPlayer.tsx"
Cohesion: 0.50
Nodes (3): StaticVideoPlayer(), VideoAspectRatio, VideoProps

### Community 216 - "Board"
Cohesion: 0.06
Nodes (22): ABC, Board, BoardMovements, Static movement helpers for chess pieces. All methods return the new position…, Print the board row by row using list comprehensions., Return all (square, piece) pairs matching the given symbol, identifier and…, Return the piece on a specific square., Return True if the square is empty. (+14 more)

### Community 217 - "http_apis/main.py"
Cohesion: 0.17
Nodes (17): CourseType, LecturerType, Mutation, Query, StudentType, Course, BaseModel, create_course() (+9 more)

### Community 218 - "models/birds.py"
Cohesion: 0.07
Nodes (48): create_db_and_tables(), get_session(), on_startup(), on_event, root(), Bird, BirdBase, BirdCreate (+40 more)

### Community 219 - "RobotRepository"
Cohesion: 0.19
Nodes (15): Session, RobotRepository, clear_functionality(), create(), delete(), get_all(), get_one(), get_repo() (+7 more)

### Community 221 - "FunctionalityRepository"
Cohesion: 0.16
Nodes (16): get_session(), FunctionalityCreate, FunctionalityUpdate, FunctionalityRepository, Session, create(), delete(), get_all() (+8 more)

### Community 222 - "wire-prototype/package.json"
Cohesion: 0.08
Nodes (24): eslint, @eslint/js, @figma/eslint-plugin-figma-plugins, @figma/plugin-typings, author, description, devDependencies, eslint (+16 more)

### Community 223 - "_get"
Cohesion: 0.19
Nodes (15): read_item(), read_root(), assign_functionality(), create_functionality(), create_robot(), _get(), get_functionality_choices(), get_location_choices() (+7 more)

### Community 224 - "manifest.json"
Cohesion: 0.12
Nodes (15): api, capabilities, documentAccess, editorType, enableProposedApi, id, main, name (+7 more)

### Community 225 - "Product"
Cohesion: 0.20
Nodes (3): Cart, Product, Product

### Community 227 - "xrehab_viz.py"
Cohesion: 0.27
Nodes (4): extract_coords(), make_motor_horizontal(), make_motor_topdown(), make_motor_vertical()

### Community 228 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, lib, strict, target, typeRoots, es2020, ./node_modules/@figma, ./node_modules/@types

### Community 229 - "dataviz_5.py"
Cohesion: 0.36
Nodes (7): apply_design(), This helper function ensures every chart exactly matches the design template!…, viz_1(), viz_2(), viz_3(), viz_4(), viz_5()

### Community 230 - "lab05_birds/gradio_app.py"
Cohesion: 0.31
Nodes (6): add_bird(), add_sighting(), add_species(), get_birds(), get_sightings(), get_species()

### Community 231 - "Image"
Cohesion: 0.53
Nodes (5): Image, convert_to_grayscale(), detect_edges(), get_image_details(), recognize_object()

### Community 232 - "eslint.config.js"
Cohesion: 0.50
Nodes (3): eslint, figmaPlugin, tseslint

### Community 239 - ".__init__"
Cohesion: 0.17
Nodes (7): AdaIN1d, AdaINResBlock1, ConvWeighted, Generator, Conv1d with weight normalization, ReflectionPad1d, UpSample1d

### Community 240 - "modules.py"
Cohesion: 0.08
Nodes (14): AdaLayerNorm, AlbertEmbeddings, AlbertEncoder, AlbertIntermediate, AlbertLayer, AlbertLayerGroup, AlbertModelArgs, AlbertOutput (+6 more)

### Community 241 - "kokoro.py"
Cohesion: 0.10
Nodes (16): BaseModelArgs, check_array_shape(), GenerationResult, Decoder, Model, Output, array, Number (+8 more)

### Community 242 - "KokoroPipeline"
Cohesion: 0.15
Nodes (11): FloatTensor, LongTensor, KokoroPipeline, array, Module, Number, Initialize a KokoroPipeline. Args: lang_code: Language code for G2P processing…, Generate audio from either raw phonemes or pre-processed tokens. Args: tokens:… (+3 more)

### Community 243 - "TestKokoroPipeline"
Cohesion: 0.09
Nodes (16): patched_open_text(), Replacement for deprecated open_text using files() API, Test KokoroModel.Output dataclass., Test ALIASES and LANG_CODES constants., Test KokoroPipeline initialization., Test load_voice method., Test sanitize_lstm_weights function., Test tokens_to_ps method. (+8 more)

### Community 244 - "load_model"
Cohesion: 0.14
Nodes (13): AudioPlayer, main(), parse_args(), get_class_predicate(), get_model_and_args(), load_model(), Module, quantize_model() (+5 more)

### Community 246 - "interpolate"
Cohesion: 0.19
Nodes (10): interpolate(), interpolate1d(), array, Interpolate array with correct shape handling. Args: input (mx.array): Input…, 1D interpolation implementation., Test input validation in interpolate function., Test size handling in interpolate function., Test 1D nearest neighbor interpolation. (+2 more)

### Community 247 - "LSTM"
Cohesion: 0.20
Nodes (5): LSTM, Process sequence in forward direction, Process sequence in backward direction, Process input sequence in both directions and concatenate the results. Args: x:…, TextEncoder

### Community 248 - "_InstanceNorm"
Cohesion: 0.29
Nodes (3): _InstanceNorm, InstanceNorm1d, Applies Instance Normalization over a 2D (unbatched) or 3D (batched) input.…

## Knowledge Gaps
- **406 isolated node(s):** `autoprefixer`, `eslint`, `eslint-config-next`, `tailwindcss`, `postcss` (+401 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **75 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `type` connect `schema.py` to `Video`, `frontend/package.json`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `process_video()` connect `process_video` to `schema.py`, `LazySegments`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `SAM2Base` connect `SAM2Base` to `MLP`, `SAM2ImagePredictor`, `sam2_utils.py`, `automatic_mask_generator.py`, `PromptEncoder`, `misc.py`, `SAM2VideoPredictor`, `SAM2VideoPredictor`, `MaskDecoder`, `BatchedVideoDatapoint`, `SAM2Transforms`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `Trainer` (e.g. with `BatchedVideoDatapoint` and `Logger`) actually correct?**
  _`Trainer` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `autoprefixer`, `eslint`, `eslint-config-next` to the rest of the system?**
  _406 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `Trainer` be split into smaller, more focused modules?**
  _Cohesion score 0.1422924901185771 - nodes in this community are weakly interconnected._