# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までに2007年1月へ進行し、75件収録済みだった。
- 今回、2007年1月残り候補から `PS行くぜ大工の源さんVD`、`サクスロ`、`ビジトジ` を新規登録した。
- **LATEST_HANDOFF基準の収録数は78件。**

## 今回追加

### `machines/2007-01_ps-ikuzedaiku-no-gensan-vd.md`
- PS行くぜ大工の源さんVD / 三洋物産 / 2007年1月導入。
- P-WORLD、5号機クロニクル、5号機一覧、後年回顧資料を横断。
- P-WORLDはBIG確率をメーカー未発表、5号機クロニクルも設定別機械割を不明として掲載。
- 掲示板には当時の獲得枚数/RTゲーム数らしき投稿があるが、ユーザー投稿のみのため確定値へ採用しない。
- 性能コア欠損は検索語・資料系統を変えて再探索後にPARTIAL判定。
- resetBehaviorも設定変更/据え置き/朝一/電源OFF→ON/天井/ガックンまで再探索したが高信頼資料を確定できずPARTIAL。
- 一部後年資料に2007年10月販売表記があるが、P-WORLD・5号機クロニクル・複数一覧は2007年1月で一致するため、ホール導入は2007-01を採用しCONFLICTメモを残した。

### `machines/2007-01_sakusuro.md`
- サクスロ / ラスター / 2007年1月 / A+RT。
- パチマガスロマガ当時解析から設定別BIG/REG/合算、PAYOUT、1000円あたりプレイ数、BIG/REG獲得性能、REG後100G RTを取得。
- BIG 1/496.48〜1/397.19、REG 1/541.62〜1/399.61、合算1/259.04〜1/199.20。
- PAYOUT 95.71〜108.21%。
- 50枚ベース40.75〜48.18G。設定6のみベースが大きく上昇する特徴を保存。
- BIG規定465枚・純増約400枚、最大416枚。REG規定38枚・純増約40枚。
- REG後RT「サクゾーン」100G。RT純増/GはUNVERIFIED。
- P-WORLDの合算値と当時解析値は丸め範囲で一致。
- coreStatusはCOMPLETE_CORE、resetBehaviorQAはPARTIAL。

### `machines/2007-01_bijitoji.md`
- ビジトジ / 銀座 / 2007年1月下旬納品予定。
- グリーンべるとで銀座初のパチスロ機、BIG+2種BC、合成1/212〜1/172、1月下旬納品予定を確認。
- パチマガスロマガから設定別BIG、ハイパーBC/ノーマルBC、1000円あたりプレイ数、各ボーナス純増を取得。
- BIG 1/346.75〜1/251.10、ハイパーBC全設定1/1310.72、ノーマルBC全設定1/936.23。
- 50枚ベース40.33〜41.22G。
- BIG約310枚、ハイパーBC約220枚、ノーマルBC約130枚。
- PAYOUTはパチマガスロマガ98.30〜110.41%と5号機クロニクル97.7〜109.8%で差がありCONFLICTとして双方保持。
- coreStatusはCOMPLETE_CORE、resetBehaviorQAはPARTIAL。

## resetBehavior 方針継続

- 新規機種はv0.7に従い性能コアとresetBehaviorを同時探索する。
- 5号機初期機で朝一/設定変更情報が現存しにくい場合でも、最初の検索だけで欠損確定しない。
- 設定変更、リセット、朝一、据え置き、電源OFF→ON、RT引継ぎ、天井、ガックン等へ検索語を変え、当時解析・古いDB・アーカイブ・後年回顧まで横断する。
- 高信頼で確認できないものだけUNVERIFIEDにする。
- 有利区間は5号機初期では非該当。

## 2007年1月残り候補監査メモ

未処理候補:
- マリーンギャング / パイオニア
- 嗚呼!我ら日本松柔道部 / ラスター
- 空手バカ一代 / オリンピア

今回処理済み:
- PS行くぜ大工の源さんVD
- サクスロ
- ビジトジ

以前までの処理済み:
- バトルリーガーX
- アイムジャグラーEX
- 新日本プロレスまでもがパチスロ機
- 南国美人
- 南国美人30
- ぐるぐる爆侍
- ジャンジャン年中猛特訓

2月送り:
- プレイボーイ / プレイボーイ-30: 2007-02-04納品予定資料あり。

## 次回再開地点

**2007年1月の残り未処理3候補 `マリーンギャング` → `嗚呼!我ら日本松柔道部` → `空手バカ一代` を実導入/納品日順に監査して収集する。3機種を処理したら2007年1月の月次漏れ監査を行い、問題なければ2007年2月へ進む。新規機種は必ず性能コア+resetBehaviorを同時収集し、既存性能値を無駄にやり直さない。**

### 次回チェック優先

- `マリーンギャング` の設定別BIG/REG、機械割、50枚ベース、獲得枚数、RT有無、resetBehavior。
- `嗚呼!我ら日本松柔道部` はラスター機。表記揺れ（日本松柔道部/日本松/柔道部）も使って当時解析を探索。
- `空手バカ一代` はRTゲーム数が非常に長い特殊機として後年回顧資料があるため、当時解析で性能コア・RT条件・朝一変更挙動を優先確認。
- 発表日と実納品/導入日を混同しない。
- 競合値は平均せずCONFLICT。

## 今回の主要資料

### PS行くぜ大工の源さんVD
- P-WORLD — https://www.p-world.co.jp/machine/database/4489
- 5号機クロニクル / 三洋物産 — https://5goki.com/sanyo
- A+RT機一覧 — https://pachisuro100.com/a-rt/
- 2007年導入一覧 — https://www.dorubako.biz/year/2007.html

### サクスロ
- パチマガスロマガ基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/a.php
- パチマガスロマガ確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/i.php
- パチマガスロマガ小役/1000円 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/c.php
- パチマガスロマガRT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/k.php
- P-WORLD — https://www.p-world.co.jp/machine/database/4502
- 5号機クロニクル / ラスター — https://5goki.com/luster

### ビジトジ
- グリーンべると — https://web-greenbelt.jp/00004978/
- パチマガスロマガ基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/a.php
- パチマガスロマガ確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/h.php
- パチマガスロマガ小役/1000円 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/02/c-2.php
- 5号機クロニクル / 銀座 — https://5goki.com/ginza

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
