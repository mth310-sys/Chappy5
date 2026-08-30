# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までに2006年12月境界監査を終え、2007年1月へ進行。前回時点で74件収録。
- 今回、2007年1月残り候補から `ジャンジャン年中猛特訓` を新規登録した。
- 既存COMPLETE_COREの遡及QAとして `ニューオアシス` にresetBehaviorを追加し、coreStatusはCOMPLETE_COREのまま維持、resetBehaviorQAをPARTIALとして別管理した。
- **LATEST_HANDOFF基準の収録数は75件。**

## 今回追加

### `machines/2007-01_janjan-nenju-motokkun.md`
- ジャンジャン年中猛特訓 / SNKプレイモア / 2007年1月下旬納品予定。
- 当時グリーンべると、P-WORLD、パチマガスロマガ、5号機クロニクル、SNK旧公式を横断。
- 赤7BIG約235枚+RT77G、青7BIG約123枚+RT33G、BAR CT約175枚+RT77G、BAR/BAR/赤7 CT約112枚+RT33G。
- 設定別4ボーナス確率と合算をパチマガスロマガから取得。合算は設定1 1/181.04〜設定6 1/146.29。
- 機械割/PAYOUTはパチマガスロマガのシミュレート96.88〜107.59%と、5号機クロニクル96.5〜105.5%が競合。平均せずCONFLICTとして双方保存。
- 50枚ベース、RT純増/Gは検索語を変え再探索したが確定できずUNVERIFIED。
- resetBehaviorは設定変更/据え置き/朝一/電源OFF→ON/RT引継ぎ/ガックンまで再探索したが高信頼資料で確定できずPARTIAL。

## resetBehavior 遡及QA

### `machines/2006-02_new-oasis.md`
- 性能コアは従来どおりCOMPLETE_COREを維持。
- 完全告知ノーマル機で、公開仕様上は天井・モード管理・RT/ART・有利区間は非該当として整理。
- 設定変更/据え置き/電源OFF→ON固有挙動、内部ボーナス成立状態処理、ガックン等の変更判別は検索語と資料系統を変えて再探索したが高信頼資料を確定できずUNVERIFIED。
- `coreStatus: COMPLETE_CORE` と `resetBehaviorQA: PARTIAL` を別管理で保存。
- 遡及QA日: 2026-08-31。

## 2007年1月残り候補監査メモ

未処理候補:
- PS行くぜ大工の源さんVD / 三洋物産
- サクスロ / ラスター
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
- ジャンジャン年中猛特訓

2月送り:
- プレイボーイ / プレイボーイ-30: 2007-02-04納品予定資料あり。

## 次回再開地点

**2007年1月の残り未処理6候補を実導入/納品日順に監査して収集する。特に `PS行くぜ大工の源さんVD` はP-WORLDと5号機クロニクルで2007年1月導入を確認済みだが、性能値のメーカー未発表/資料不足が多いため、当時解析・古いDB・保存アーカイブまで横断してからPARTIAL判定する。並行QAでは既存レコードを古い順に1件ずつ遡及し、resetBehavior未収集機を補完する。次の遡及候補は `新世紀エヴァンゲリオン` から古い順に進める。**

### 次回チェック優先

- `PS行くぜ大工の源さんVD`、`サクスロ`、`ビジトジ`、`マリーンギャング`、`嗚呼!我ら日本松柔道部`、`空手バカ一代` の実導入/納品日と性能コアを解像する。
- 発表日と実納品/導入日を混同しない。
- 新規機種は必ずv0.7 resetBehaviorも同時探索する。
- 最初の検索で見つからなくても、設定変更/リセット/朝一/据え置き/電源OFF ON/RT引継ぎ/天井/ガックン等へ検索語を変える。
- 既存性能値のCOMPLETE_COREは不用意に崩さず、resetBehaviorQAを別管理する。
- resetBehavior遡及は古い順に継続する。

## 今回の主要資料

### ジャンジャン年中猛特訓
- グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/1971/greenbelt
- パチマガスロマガ基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/09/a.php
- パチマガスロマガ確率/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/09/h.php
- P-WORLD — https://www.p-world.co.jp/machine/database/4528
- 5号機クロニクル — https://5goki.com/snkplaymore
- SNK旧公式 — https://slot.snk-corp.co.jp/official/janjan-motokkun/download/kiyaku.html

### ニューオアシス resetBehavior QA
- グリーンべると — https://web-greenbelt.jp/00004505/

### 2007年候補監査
- 2007年導入一覧 — https://dorubako.biz/year/2007.html
- A+RT機5号機一覧 — https://pachisuro100.com/a-rt/

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
