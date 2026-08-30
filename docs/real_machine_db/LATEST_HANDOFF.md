# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までに2006年12月境界監査を終え、2007年1月へ進行。`バトルリーガーX` と `アイムジャグラーEX` まで登録済み、LATEST_HANDOFF基準70件だった。
- 今回、2007年1月のメーカー別/年別一覧・当時業界記事・P-WORLD・当時解析を横断し、未処理だった `新日本プロレスまでもがパチスロ機`、`南国美人`、`南国美人30`、`ぐるぐる爆侍` を新規登録した。
- **LATEST_HANDOFF基準の収録数は74件。**

## 今回追加

### `machines/2007-01_shin-nihon-pro-wrestling.md`
- 新日本プロレスまでもがパチスロ機 / 平和・HEIWA BROS / 2007年1月初旬納品予定。
- 当時グリーンべると、HAZUSE、パチマガスロマガを横断。
- BIG約312枚、CB平均約145枚（業界記事では最大221枚）、REG約104枚、全ボーナス後60G RTを確認。
- 設定別BIG/CB/REG/合算、1000円あたり36.0〜38.0GをHAZUSE当時解析から取得。
- 機械割はHAZUSE 94.2/96.6/101.4/103.2/105.5/107.1%と、後年5号機クロニクル94.5/97.1/100.8/103.0/105.7/107.6%が競合。平均せずCONFLICT。
- 後年5号機クロニクルのBIG約250枚+RT50G記載も、当時業界/解析3系統のBIG約312枚+RT60Gと競合するため別根拠として保持。
- resetBehaviorは設定変更/据え置き/電源断/朝一/RT引継ぎを表記変更して再探索したが、高信頼資料で確定できずPARTIAL。

### `machines/2007-01_nangoku-bijin.md`
- 南国美人 / オリンピア / 2007年1月 / 25Φ。
- パチマガスロマガで設定別BIG/REG/合算、PAYOUT 95.43〜108.46%、1000円あたり38.44〜40.80Gを取得。
- BIG約250枚、REG約105枚。ボーナス後CZ経由RT「南国タイム」は最大100G、約0.4枚/G。
- P-WORLDでボーナス確率を照合。
- 性能コアはCOMPLETE_CORE。resetBehaviorは設定変更/据え置き/電源OFF→ON時のCZ/RT処理、朝一恩恵/変更判別を再探索したが未確認のためresetBehaviorQAはPARTIAL。

### `machines/2007-01_nangoku-bijin-30.md`
- 南国美人30 / オリンピア / 2007年1月 / 30Φ派生。
- パチマガスロマガが「南国美人&30」として共通解析を掲載し、P-WORLDにも30Φ独立DBがあるため全機種方針に従い独立レコード化。
- 設定別性能、ベース、BIG/REG獲得、RT最大100G・約0.4枚/Gは25Φと共通資料で確認。
- 性能コアCOMPLETE_CORE、resetBehaviorQA PARTIAL。

### `machines/2007-01-21_guruguru-bakusamurai.md`
- ぐるぐる爆侍 / JPS / 型式名グルグルバクザムライ。
- 当時グリーンべるとで2007-01-21納品開始予定を確認。
- BIG約275枚、青7 CTと突Bの2種CT。青7 CT後最大50G RT、突B後最大100G RT。
- RTは順押し約0.2枚/G、逆押し約0枚/Gでパンク回避を優先できる仕様。
- HAZUSE、P-WORLD、パチマガで設定別BIG/CT/合算を照合。
- 市場掲載出玉率98.0〜107.0%とパチマガのシミュレートPAYOUT96.70〜106.26%は定義が異なるためCONFLICTとして双方保持。
- CT純増もパチマガ約115枚と業界記事フリー打ち約140枚の差を平均せず保持。
- 50枚ベースは検索語を変えて再探索したが確定できずUNVERIFIED。
- resetBehaviorも設定変更/据え置き/電断/朝一/RT引継ぎを再探索したが高信頼情報未確認のためPARTIAL。

## 2007年1月残り候補監査メモ

年別一覧・A+RT一覧などから、以下の未処理候補を確認している。導入月だけで即登録せず、当時業界記事・メーカー資料・P-WORLD等で実導入/納品時期を解像して時系列に処理すること。

- PS行くぜ大工の源さんVD / 三洋物産
- サクスロ / ラスター
- ジャンジャン年中猛特訓 / SNKプレイモア
- ビジトジ / 銀座
- マリーンギャング / パイオニア
- 嗚呼!我ら日本松柔道部 / ラスター
- 空手バカ一代 / オリンピア

処理済み:
- バトルリーガーX
- アイムジャグラーEX
- 新日本プロレスまでもがパチスロ機
- 南国美人
- 南国美人30
- ぐるぐる爆侍

2月送り:
- プレイボーイ / プレイボーイ-30: 2007-02-04納品予定資料あり。

## 次回再開地点

**2007年1月の残り未処理候補を実導入/納品日順に監査して収集する。上記7候補について、機種名表記揺れ・型式名・メーカー名を使い、メーカー/業界一次資料→当時解析→P-WORLD/古いDB→回顧資料の順で性能コアとresetBehaviorを同時収集する。1月の漏れ監査が完了してから2007年2月へ進む。**

### 次回チェック優先

- `PS行くぜ大工の源さんVD`、`サクスロ`、`ジャンジャン年中猛特訓`、`ビジトジ`、`マリーンギャング`、`嗚呼!我ら日本松柔道部`、`空手バカ一代` の実導入/納品日を当時資料で確定または月単位まで解像する。
- 発表日と実納品/導入日を混同しない。
- 新規機種は必ずv0.7 resetBehaviorも同時探索する。
- 最初の検索でresetBehaviorが見つからなくても、設定変更/リセット/朝一/据え置き/電源OFF ON/RT引継ぎ/天井/ガックン等へ検索語を変えてからUNVERIFIED判定する。
- 既存性能値は最初からやり直さず、必要な境界確認のみ行う。

## 今回の主要資料

### 新日本プロレスまでもがパチスロ機
- グリーンべると — https://web-greenbelt.jp/00004980/
- HAZUSE — https://www.hazuse.com/i/data/shinnihon/top.htm
- パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/01/a.php
- 5号機クロニクル — https://5goki.com/heiwa-olympia

### 南国美人 / 南国美人30
- パチマガスロマガ基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/a.php
- パチマガスロマガ確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/k.php
- パチマガスロマガ通常時データ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/77/c.php
- P-WORLD 25Φ — https://www.p-world.co.jp/machine/database/4515
- P-WORLD 30Φ — https://www.p-world.co.jp/machine/database/4519

### ぐるぐる爆侍
- グリーンべると — https://web-greenbelt.jp/00005003/
- HAZUSE — https://hazuse.com/i/data/guruguru-bakusamurai/guruguru-bakusamurai/top.htm
- P-WORLD — https://www.p-world.co.jp/machine/database/4510
- パチマガスロマガ確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/07/h.php
- パチマガスロマガ基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/07/a.php

### 2007年候補監査
- 2007年導入一覧 — https://dorubako.biz/year/2007.html
- A+RT機5号機一覧 — https://pachisuro100.com/a-rt/

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
