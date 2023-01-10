<?php
function processDirectory($folder){
    $files = array();
    $i = 1;
    if ($handle = opendir($folder)) {
        while (false !== ($file = readdir($handle))) {
            if ($file != "." && $file != "..") {
                $image = str_replace("../public/","",$folder . '/' . $file);
                $title = pathinfo($file, PATHINFO_FILENAME);
                $files[] = [$i => ['title'=>$title, 'image'=>$image]];
                $i++;
            }
        }
        closedir($handle);
    }
    return $files;
}
$filesPosters = processDirectory('../public/image/posters');
$filesTypos = processDirectory('../public/image/typos');
$filesMusic = processDirectory('../public/music');

$output = "export const posters = {\n";
foreach ($filesPosters as $file) {
    $output .= '  ' . key($file) . ': {' . "\n";
    $output .= '    title: "' . $file[key($file)]['title'] . '",' . "\n";
    $output .= '    image: "' . $file[key($file)]['image'] . '",' . "\n";
    $output .= '  }, ' . "\n";
}
$output .= "};\n";
file_put_contents('components/data/posters.js', $output);

$output = "export const typos = {\n";
foreach ($filesTypos as $file) {
    $output .= '  ' . key($file) . ': {' . "\n";
    $output .= '    title: "' . $file[key($file)]['title'] . '",' . "\n";
    $output .= '    image: "' . $file[key($file)]['image'] . '",' . "\n";
    $output .= '  }, ' . "\n";
}
$output .= "};\n";
file_put_contents('components/data/typos.js', $output);

$output = "export const musics = {\n";
foreach ($filesMusic as $file) {
    $output .= '  ' . key($file) . ': {' . "\n";
    $output .= '    title: "' . $file[key($file)]['title'] . '",' . "\n";
    $output .= '    file: "' . $file[key($file)]['image'] . '",' . "\n";
    $output .= '  }, ' . "\n";
}
$output .= "};\n";
file_put_contents('components/data/musics.js', $output);
