# frozen_string_literal: true

require "bundler/gem_tasks"
require "rubocop/rake_task"

RuboCop::RakeTask.new

task default: :rubocop

task "build:webpack" do
  sh 'yarn --cwd src run webpack --mode production -o www -w'
end
