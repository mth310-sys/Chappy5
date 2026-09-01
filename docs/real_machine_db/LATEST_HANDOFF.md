# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは251件地点。2008-04-21遡及追加 `シートラッド / シートラッド30` まで完了、時系列本線の最新一般導入確認日は2008-05-12 `一騎当千 / 一騎当千A`。
- 2008-05-12同日群および直後を再監査し、当時業界史で次の具体日として2008-05-19に `格闘美神 武龍（ウーロン）X / PSドキューンGB / 熱血硬派くにおくん` を確認。
- 今回、同日群の先頭として252件目 `パチスロ格闘美神ウーロン` を追加。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 252. パチスロ格闘美神ウーロン（サミー）

- record: `docs/real_machine_db/machines/2008-05-19_fighting-beauty-wulong.md`
- commit: `c5db58a21c2246faf61119563d3cca0f91758404`
- releaseDate: `2008-05-19`
- systemType: ノーマル+RT / 技術介入 / 天井RT
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_DEFINITION_VARIANTS`
- resetBehaviorQA: `PARTIAL_WITH_SINGLE_SOURCE_RESET_BENEFIT`

### 性能コア

- 設定構成: `1 / 3 / 5 / F`。
- BIG: `1/397.19 / 1/366.12 / 1/341.33 / 1/309.13`。
- REG: `1/736.36 / 1/668.73 / 1/601.25 / 1/541.62`。
- 合成: `1/258.02 / 1/236.59 / 1/217.73 / 1/196.80`。
- 1000円あたりゲーム数: `47.19 / 48.56 / 50.07 / 51.19G`。
- BIG最大363枚、REG約116枚。
- BIG後100GのDRAGON TIME。
- BIG後999G / REG後777Gで次回ボーナスまでの天井DRAGON TIME、純増約+0.2枚/G。
- 機械割は技術介入成功率で定義を分離。パチマガスロマガ100%成功シミュレート `100.48 / 104.33 / 108.19 / 113.15%`、50%成功 `99.28 / 103.04 / 106.85 / 111.71%`。回顧資料の完全攻略値等も平均せず別系列保持。

### v0.7 resetBehavior

- settingChangeBehavior: `SETTING_CHANGE_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `CONFLICT_OR_UNVERIFIED_SETTING_CHANGE_CEILING_COUNTER`
- ceilingAfterReset: `SETTING_CHANGE_100G_DRAGON_TIME_BENEFIT_REPORTED; ORIGINAL_999_777_COUNTER_HANDLING_UNVERIFIED`
- modeAfterReset: `SETTING_CHANGE_SPECIAL_RT_STATE_REPORTED_SINGLE_SOURCE`
- stateAfterReset: `SETTING_CHANGE_TO_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `SETTING_CHANGE_AFTER_100G_DRAGON_TIME_REPORTED_SINGLE_SOURCE`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `SETTING_CHANGE_AFTER_DRAGON_TIME_100G_REPORTED_SINGLE_SOURCE`
- 2008年12月の攻略系ブログは「設定変更後100G間もドラゴンタイム」と明記。一方、別の当時実戦系資料は天井G数について「設定変更では（おそらく）リセットされない」と推測記述。後者は断定情報ではないため、天井カウンタ処理は推測で埋めず `CONFLICT_OR_UNVERIFIED`。
- 据え置き、電源OFF→ON、100G RT終了後の天井起算、ガックン/初期出目は検索語・資料系統変更後も直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 今回の主要出典

取得日: 2026-09-01

- パチマガスロマガ「格闘美神ウーロン・ボーナス確率」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/112/h.php
- パチマガスロマガ「格闘美神ウーロン・小役確率」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/112/c.php
- P-WORLD「パチスロ格闘美神ウーロン」
  - https://www.p-world.co.jp/machine/database/5171
- K-Navi「パチスロ格闘美神ウーロン」
  - https://p-kn.com/slot/803/
- パチスロ5号機まとめwiki「格闘美神 武龍」
  - https://w.atwiki.jp/5gouki/pages/115.html
- パチスロ業界初まとめ 更新情報5
  - https://slothistory.com/kousin_kako05.html
- 裏ブログ－URATAIDOU部 2008-12-14
  - https://blog.livedoor.jp/urataidou/archives/55188858.html
- ターリンのブログ旧記事一覧
  - https://plaza.rakuten.co.jp/smb3todq8c/diaryall/
- みんスロ「格闘美神ウーロン」
  - https://minslo.com/%E6%A0%BC%E9%97%98%E7%BE%8E%E7%A5%9E%E3%82%A6%E3%83%BC%E3%83%AD%E3%83%B3/
- パチセブン「新台入替自粛中のビタ祭り【前編】～名機ウーロン～」
  - https://pachiseven.jp/articles/detail/11319

## 重複防止

- 既存251件の再追加禁止。
- 252 `パチスロ格闘美神ウーロン` も再追加禁止。
- 2008-05-19同日群の `PSドキューンGB / 熱血硬派くにおくん` は未処理。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準252件地点。2008-05-19同日群の次未処理は `PSドキューンGB（ドキューン）`。**
2. 続いて同日 `熱血硬派くにおくん` を処理。同日群の他機種がないか再監査してから次の日付へ進む。
3. その後、当時業界史で `ヒミコスタイルA 2008-05-26`、`神たま ～みこしちゃん奮闘編 2008-05-26`、`監獄JACK2 / ソニックライブ / 大繁盛本舗 江戸バージョン 2008-06-02` 等の具体日候補を順に比較する。
4. `格闘美神ウーロン` の設定変更後100G DRAGON TIMEは単一当時系資料なので、将来QAで別系統の直接資料が見つかれば照合を強化する。天井カウンタの設定変更/据え置き/電断処理は推測禁止。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
