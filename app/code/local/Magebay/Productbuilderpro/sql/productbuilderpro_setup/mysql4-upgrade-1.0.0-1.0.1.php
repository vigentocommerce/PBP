<?php
$installer = $this;
$installer->startSetup();
$installer->run("
	CREATE TABLE IF NOT EXISTS {$this->getTable('mst_pbp_images')} (
		`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
		`filename` varchar(500) NOT NULL DEFAULT '',
        `name` varchar(500) NOT NULL DEFAULT '',
		`category` varchar(500) NOT NULL DEFAULT '',
        `tag` varchar(500) NOT NULL DEFAULT '',
		`position` int(11) NOT NULL DEFAULT '0',
		PRIMARY KEY (`id`)
	) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
");
$installer->endSetup(); 
