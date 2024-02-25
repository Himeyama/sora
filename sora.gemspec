# frozen_string_literal: true

require_relative "lib/sora/version"

Gem::Specification.new do |spec|
  spec.name = "sora"
  spec.version = Sora::VERSION
  spec.authors = ["MURATA Mitsuharu"]
  spec.email = ["hikari.photon+dev@gmail.com"]

  spec.summary = "sora is an http server in Ruby that can send and receive strings and files."
  spec.description = "sora (Server Of Ruby for Access) can send and receive files, " \
    "and transmit text strings to communicate information."
  spec.homepage = "https://github.com/Himeyama/sora"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.6.0"

  # spec.metadata["allowed_push_host"] = ""

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/Himeyama/sora"
  spec.metadata["changelog_uri"] = "https://github.com/Himeyama/sora/blob/master/CHANGELOG.md"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(__dir__) do
    `git ls-files -z`.split("\x0").reject do |f|
      (File.expand_path(f) == __FILE__) ||
        f.start_with?(*%w[bin/ test/ spec/ features/ .git .circleci appveyor Gemfile])
    end
  end
  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Uncomment to register a new dependency of your gem
  # spec.add_dependency "example-gem", "~> 1.0"

  # For more information and examples about making a new gem, check out our
  # guide at: https://bundler.io/guides/creating_gem.html
end
