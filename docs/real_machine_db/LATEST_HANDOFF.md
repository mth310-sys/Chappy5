# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは353件地点 `快盗天使ツインエンジェル2`（2009-03-30）。既存353件を再追加せず、2009-03-30〜03-31と2009年4月初頭を再監査した。
- `スターマンアイズ` は当時グリーンべるとで **2009年3月下旬納品予定**までで具体日未確定。今回も3/30・3/31へ推測挿入しない。
- `ジュードーズ` は2009年3月機であることは確認できるが、今回も具体納品/導入日を安全に確定できず推測配置しない。
- ALL7 2009年4月一覧と当時業界記事を照合し、4/1〜4/4へ安全に置ける未処理パチスロ具体日を今回確定できなかった。
- 当時グリーンべるとで山佐 **`夢花月` は2009-04-05納品開始予定**、K-Naviでは **2009-04-06ホール導入開始**。物流開始とホール稼働開始の定義差を保持し、最古具体日2009-04-05で354件目として追加。
- **今回 354「夢花月」を追加。既存354件の再追加禁止。**

## 350〜353（継承）

- 350 `スクール☆ウォーズ` / 銀座 / 2009-03-16 / commit `2606adf3959ac1d483146e686b718efeae0edb11`
- 351 `マジカルハロウィンR` / KPE / 2009-03-16 / commit `61eb3a75db4f05e4c96257fbaab11d919308ec53`
- 352 `ドラキュラ` / NET / 2009-03-01遡及 / commit `3e9bf222191351eecc3104a66b50a02cddd5ae38`
- 353 `快盗天使ツインエンジェル2` / サミー / 2009-03-30 / commit `1b7ec7f9a5a281582b8ae6a636b625acf5adc601`

## 354. 夢花月

record:
- `docs/real_machine_db/machines/2009-04-05_yume-kagetsu.md`

要点:
- manufacturer: 山佐（YAMASA）
- formalModelName: `ユメカゲツD`（P-WORLD、検定番号8S0905）
- releaseDate: **2009-04-05**（当時グリーンべると納品開始予定）。K-Naviは2009-04-06ホール導入開始、山佐公式は2009年4月稼働。
- generation: 5号機
- systemType: A+ART / 完走型ART / チャンスRT経由ART抽選
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: `CONFLICT`
  - P-WORLD: **97.1 / 99.4 / 102.2 / 104.8 / 107.4 / 110.7%**
  - 旧解析整理: **97.2 / 99.2 / 102.2 / 104.6 / 107.4 / 110.0%**
  - 平均化せず双方保持。
- BIG: **1/1524.1 → 1/993.0**（P-WORLD。旧解析の1/1524.0→1/992.9と丸め整合）
- ART初当り: **1/195.2 → 1/118.4**（旧解析複数掲載。メーカー公表表ではないためANALYSIS_SINGLE系）
- 50枚ベース: パチマガスロマガの1000円あたり **29.88 / 29.87 / 29.87 / 29.86 / 29.86 / 29.85G**
- ART「花月乱舞」: **約+1.5枚/G**。山佐公式・当時業界・P-WORLD・K-Naviで一致。
- ART継続G数: **33 / 77 / 111 / 333 / 555 / 777 / 999G**。999Gは通常天井ではなくART継続G数上限。
- BIG: 約210枚。BIG後ARTは77G以上、約85%で111G以上。
- 後年5号機クロニクルの「2009年7月・Aタイプ(RT)・BIG/REG」説明は本A+ART機と整合しないため、本レコードでは混同防止目的で不採用。

### v0.7 resetBehavior

- settingChangeBehavior: `ANALYSIS_SINGLE_FINDING`。旧独自調査では、設定変更時の液晶開始ステージは変更前状態を参照し、朝/夕方→夕方、ART中/夜→夕方または夜、BIG内部成立時→夜と報告。メーカー/大手解析本文で同一処理を直接再確認できないためCONFIRMEDにはしない。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の内部高確状態、ART残G/上乗せ、RT状態、液晶開始ステージの具体的引継ぎは未確定。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の内部状態、ART/RT残状態、液晶開始ステージ処理は未確定。
- gameCounterReset: `NOT_APPLICABLE_TO_NORMAL_CEILING / ART_REMAINDER_UNVERIFIED`。通常ゲーム数天井は確認されず、ART33〜999Gを天井扱いしない。
- ceilingAfterReset: `NONE_CONFIRMED_AFTER_RESEARCH`。リセット短縮天井の公開値なし。
- modeAfterReset: 内部モードは未確定。液晶ステージのみ単一旧独自調査の変更前状態参照報告あり。
- stateAfterReset: 低確/高確等の内部状態そのものは未確定。液晶ステージ挙動だけから断定しない。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: 朝一専用の当選率・短縮天井・恩恵発生率は確認できず。K-Naviに「朝イチ特典」「朝イチは狙い目?」項目の存在までは確認。
- resetPenalties: 設定変更固有の主要不利数値は確認できず。
- resetDetection: 設定変更後の夕方/夜液晶スタートは単一旧独自調査上の判別材料候補。ガックン/初期出目/ランプは `UNVERIFIED_AFTER_RESEARCH`。

主要出典（取得日 2026-09-02）:
- 山佐公式 / 夢花月 — OFFICIAL
  - https://yamasa-next.co.jp/model_ykt/
- グリーンべると / 山佐、高純増ARTメインの『夢花月』発表 — INDUSTRY_CONTEMPORARY
  - https://news.p-world.co.jp/articles/3364/greenbelt
- P-WORLD / 夢花月 — INDUSTRY_DATABASE
  - https://www.p-world.co.jp/machine/database/5480
- K-Navi / パチスロ「夢花月」 — ANALYSIS_HIGH
  - https://p-kn.com/slot/956/
- パチマガスロマガ / 1000円あたりゲーム数 — ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/162/c.php
- パチマガスロマガ / 夢花月総合 — ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/162/yamasa_slot_162.php
- 侍～samurai～777 / 夢花月旧解析 — OLD_ANALYSIS_SINGLE
  - https://ameblo.jp/samurai777net/entry-10210113143.html
- こだわり山佐の館 / 夢花月 — RETROSPECTIVE_DATABASE_SINGLE
  - https://plaza.rakuten.co.jp/jognoyamasa/2128/
- キリアのスロット日記 / 夢花月 — OLD_ANALYSIS_SINGLE_INDEPENDENT_TEST
  - https://plaza.rakuten.co.jp/kirialoverio/81000/
- ALL7 / 2009年4月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/04

commit:
- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`

## 2009年3月〜4月 境界監査

- 3/1 `タコスロ7R` 既存348。
- 3/1 `バトルアスリーテス大運動会` 既存349。
- 3/1 `ドラキュラ` 既存352（遡及）。
- 3/16 `スクール☆ウォーズ` 既存350。
- 3/16 `マジカルハロウィンR` 既存351。
- 3/30 `快盗天使ツインエンジェル2` 既存353。
- `スターマンアイズ` は3月下旬予定止まり、具体日未確定。
- `ジュードーズ` は2009年3月機だが具体日未確定。
- `ニューパルサー3` はALL7で2009-06-01へ送付済み。
- 4/5 `夢花月` 今回354（4/6ホール導入開始資料も保持）。
- 4/1〜4/4は今回具体日付き未処理パチスロを確定できず。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準354件地点。既存354件の再追加禁止。**
2. **2009-04-06〜04-12を具体納品/導入日で監査**する。発表日・記事投稿日を導入日に代用しない。
3. 4/6〜4/12に未処理機がなければ、4/13群へ接続する。
4. 4/13の候補として **`クラシックジャグラー`（北電子）** は複数後年DBで2009-04-13導入、当時K-Naviで「4月中旬導入予定」まで確認済み。次回は当時業界/メーカー系の具体日を追加照合し、既存未登録なら次番号候補とする。
5. ALL7の2009年4月具体日一覧では4/13に `シーシー`（コルモ）等も確認できるため、パチンコ機を除外しパチスロ同日群を漏れなく監査する。
6. `スターマンアイズ / ジュードーズ` は具体日が新たに取れた場合のみ正しい時系列位置へ遡及追加する。
7. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
8. 一般論、後継機、同名別メーカー機の値で推測補完しない。

## コミット

- 350 スクール☆ウォーズ: `2606adf3959ac1d483146e686b718efeae0edb11`
- 351 マジカルハロウィンR: `61eb3a75db4f05e4c96257fbaab11d919308ec53`
- 352 ドラキュラ（NET・遡及）: `3e9bf222191351eecc3104a66b50a02cddd5ae38`
- 353 快盗天使ツインエンジェル2: `1b7ec7f9a5a281582b8ae6a636b625acf5adc601`
- 354 夢花月: `131ad235224d14cb77b34f8c6e5ae8f69b860640`
