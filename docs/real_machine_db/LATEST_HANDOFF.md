# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは252件地点。2008-05-19同日群の先頭 `パチスロ格闘美神ウーロン` まで完了。
- 今回、同日群の次未処理 `PSドキューンGB（ドキューン）` を253件目として追加。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 253. ドキューン（三洋物産）

- record: `docs/real_machine_db/machines/2008-05-19_dokyun.md`
- commit: `4e49728a606b6383dd270168df03aed8094bcd01`
- modelName: `PSドキューンGB`
- releaseDate: `2008-05-19`
- systemType: ノーマル+CZ+RT / 目押し不要設計
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_CONFLICT`
- resetBehaviorQA: `UNVERIFIED_AFTER_RESEARCH`

### 性能コア

設定構成は `1 / 3 / 5 / 6`。

- BIG主系列: `1/228.35 / 1/214.17 / 1/199.80 / 1/177.12`
- REG: `1/358.12 / 1/318.14 / 1/297.89 / 1/271.93`
- 合成: `1/139.44 / 1/128.00 / 1/119.59 / 1/107.26`
- 1000円あたりゲーム数: `35.59 / 35.68 / 36.55 / 36.94G`
- RT「SHOOTING TIME」: 77G、約 `+0.1枚/G`
- ボーナス後は必ず7G CZ。特殊リプレイ入賞でRTへ突入。
- 当時攻略記事のRT期待度: BIG後約60%、REG後約30%。
- BIG純増約200枚、REG純増約50枚。

### CONFLICT

- 機械割:
  - パチマガスロマガ: `96.81 / 99.91 / 103.98 / 109.98%`
  - K-Navi: `95.97 / 99.80 / 104.83 / 111.78%`
  - 5号機クロニクル: `96.0 / 99.8 / 104.8 / 111.8%`
  - 単純丸めではないため平均せず `CONFLICT_PAYOUT_RATE`。
- 設定1 BIG:
  - パチマガスロマガ / P-WORLD / 2008年当時攻略記事: `1/228.35` 系列
  - K-Navi: `1/222.35`
  - `CONFLICT_BIG_SETTING1_222.35_VS_228.35`
- BIG規定払い出し:
  - パチマガスロマガ: `253枚超`
  - K-Navi: `235枚超`
  - `CONFLICT_BIG_PAYOUT_THRESHOLD_235_VS_253`

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NO_NORMAL_GAME_COUNT_CEILING_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH_CZ_RT_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

`ドキューン / PSドキューンGB / 三洋物産` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / CZ / RT / 77G / SHOOTING TIME / 天井 / ガックン / 初期出目` を組み替えて、当時解析・旧DB・業界史・回顧資料を横断。パチマガスロマガの現存インデックスには「攻め時・ヤメ時・設定変更時」項目の存在自体は確認できるが、本機固有本文を直接確定できなかったため推測で埋めていない。設定変更/据え置き/電断時のCZ・RT残状態、ガックン等は `UNVERIFIED_AFTER_RESEARCH`。通常ゲーム数天井、朝一専用短縮天井、設定変更専用モード、公開朝一数値は `NONE_CONFIRMED`。

## 今回の主要出典

取得日: 2026-09-01

- パチマガスロマガ「ドキューン・ボーナス確率」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/06/h.php
- パチマガスロマガ「ドキューン・小役確率」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/06/c.php
- パチマガスロマガ「ドキューン・基本システム」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/06/a.php
- P-WORLD「ドキューン」
  - https://www.p-world.co.jp/machine/database/5184
- K-Navi「ドキューン」
  - https://p-kn.com/slot/809/
- あこちゃんのスロット攻略日記 2008-06-09
  - https://plaza.rakuten.co.jp/slotaco/diary/200806090003/
- 5号機クロニクル「三洋物産 5号機全機種一覧」
  - https://5goki.com/sanyo
- パチスロ業界初まとめ 更新情報5
  - https://slothistory.com/kousin_kako05.html
- Pマンズ 2008-04「三洋物産が『ドキューン』を発表」
  - https://p-mans.blogspot.com/2008/04/
- CROOZ / 三洋販売 2008-09-29プレスリリース
  - https://prtimes.jp/main/html/rd/p/000000139.000000082.html

## 重複防止

- 既存252件の再追加禁止。
- 253 `ドキューン / PSドキューンGB` も再追加禁止。
- 2008-05-19同日群の `熱血硬派くにおくん` は未処理。
- `パチスロリッジレーサーB` も当時業界史で2008-05-19発売と確認されているため、同日群監査対象として未処理判定を必ず行う。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準253件地点。2008-05-19同日群の次未処理は `熱血硬派くにおくん`。**
2. 同日群には `パチスロリッジレーサーB` の2008-05-19発売記録もあるため、既存レコード有無を先に確認し、未登録なら時系列上ここで処理する。
3. 2008-05-19同日群を閉じた後、2008-05-20〜25を境界監査してから `ヒミコスタイルA 2008-05-26`、`神たま ～みこしちゃん奮闘編 2008-05-26` 等へ進む。
4. `ドキューン` の設定変更ページ本文が別アーカイブ等で取得できた場合は、settingChange/carryOver/powerCycle/CZ・RT残状態をQAで更新する。現状は推測禁止。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
