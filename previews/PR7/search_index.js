var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"CurrentModule = MixedModelsSerialization","category":"page"},{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"Modules = [MixedModelsSerialization]","category":"page"},{"location":"api/#MixedModelsSerialization.LinearMixedModelSummary","page":"API","title":"MixedModelsSerialization.LinearMixedModelSummary","text":"LinearMixedModelSummary{T<:AbstractFloat} <: MixedModelSummary{T}\nLinearMixedModelSummary(m::LinearMixedModel)\n\nA \"summary\" of a LinearMixedModel with a reduced memory footprint.\n\nThis type does not store the model matrices of a LinearMixedModel and thus will consume far less memory, especially for models with many observations. Instead, the relevant entities for summarizing a model are stored:\n\nfixed effects coefficients and associated variance-covariance matrix\nrandom effects covariances\nthe θ vector and OptSummary used in optimization\n(conditional modes and variances are not currently stored)\nthe log likelihood\ninformation about the model and residual degrees of freedom\n\nUsing these values, it is possible to provide implementations for many but not all methods in StatsAPI and MixedModels.\n\nwarning: Warning\nAll field names and associated storage format should be considered private implementation details. Use appropriate methods to e.g. extract the log likelihood or the variance-covariance matrix. Stability of the internal structure is not guaranteed, even between non-breaking releases.\n\n\n\n\n\n","category":"type"},{"location":"api/#MixedModelsSerialization.MixedModelSummary","page":"API","title":"MixedModelsSerialization.MixedModelSummary","text":"MixedModelSummary{T} <: MixedModel{T}\nMixedModelSummary(m::LinearMixedModel)\n\nAbstract type for a \"summary\" of a MixedModel with a reduced memory footprint.\n\nConcrete subtypes do not the model matrices of a MixedModel and thus will consume far less memory, especially for models with many observations. However, they may store relevant parameters and derived values for implementing common StatsAPI` methods that don't depend on the original data.\n\nSee also LinearMixedModelSummary\n\n\n\n\n\n","category":"type"},{"location":"#MixedModelsSerialization.jl-Documentation","page":"Home","title":"MixedModelsSerialization.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = MixedModelsSerialization","category":"page"},{"location":"","page":"Home","title":"Home","text":"MixedModelsSerialization.jl is a Julia package providing some extra serialization and memory-saving (at the cost of some functionality) capabilities for models fit with MixedModels.jl. It is a proving ground for new ideas so that breaking releases can be made independently of MixedModels.jl.","category":"page"}]
}