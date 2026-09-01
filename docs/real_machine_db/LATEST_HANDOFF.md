# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは249件地点 / 実ホール導入日2008-05-12 `一騎当千 / 一騎当千A` まで完了。
- 指定どおり2008-05-01〜11境界を再監査したところ、岡崎産業 `シートラッド / シートラッド30` に具体日資料を発見。
- 当時業界史 `パチスロ業界初まとめ` は2機種を `2008/4/21発売（10台未満は5/12）`、型式 `BORABORA/-30` と記録。5号機クロニクル/pacnk等は2008年5月導入。後年一覧には20/25φを4月・30φを5月とする資料もある。
- 月精度資料だけで5月機として固定せず、具体日のある4/21を主日付に採用。ただし4/21は10台未満の極少数先行、5/12が一般展開側という定義差を `CONFLICT_RELEASE_DATE_DEFINITION` として保持。
- 今回、遡及追加として250件目 `シートラッド`、251件目 `シートラッド30` を追加。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 250. シートラッド（岡崎産業）

- record: `docs/real_machine_db/machines/2008-04-21_seatrad.md`
- commit: `aa90d1aaeaebb79041e8f6c5e27c9c07457e62eb`
- modelName: `BORABORA`
- releaseDate: `2008-04-21`
- generalRolloutReference: `2008-05-12`
- systemType: ノーマル / 純Aタイプ / 20・25φ側 / 後告知主体
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/321.25 / 1/306.24 / 1/293.88 / 1/281.27 / 1/264.26 / 1/248.24`。
- REG: `1/422.81 / 1/390.10 / 1/364.09 / 1/337.81 / 1/306.24 / 1/282.48`。
- 合成: `1/182.55 / 1/171.56 / 1/162.62 / 1/153.48 / 1/141.85 / 1/132.13`。
- 1000円あたりゲーム数: `37.14 / 37.48 / 38.14 / 38.50 / 38.88 / 39.59G`。
- BIG: 規定払い出し346枚超、純増約305枚。
- REG: 規定払い出し140枚超、技術介入最高119枚。
- RT/AT等なし、天井なし。
- 機械割はパチマガスロマガ `95.59〜111.94%`、pacnk `95.5〜111.7%`、5号機クロニクル `94.4〜111.6%` の系列差を `CONFLICT_PAYOUT_RATE` として保持。

### v0.7 resetBehavior

- settingChangeBehavior: `NO_SPECIAL_GAMEPLAY_EFFECT_CONFIRMED`
- carryOverBehavior: `NOT_APPLICABLE_NO_CEILING_MODE_RT_ART_CONFIRMED`
- powerCycleBehavior: `NOT_APPLICABLE_NO_CEILING_MODE_RT_ART_CONFIRMED`
- gameCounterReset: `NOT_APPLICABLE_NO_CEILING`
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`
- modeAfterReset: `NOT_APPLICABLE_NO_INTERNAL_MODE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE_NO_RT_ART_CZ_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`
- 当時パチマガスロマガ機種ページの「攻め時・ヤメ時・設定変更時→特にナシ」を根拠に、専用朝一恩恵/不利なしを確認。ただしガックン/初期出目など変更判別は直接資料未確認。

## 251. シートラッド30（岡崎産業）

- record: `docs/real_machine_db/machines/2008-04-21_seatrad-30.md`
- commit: `151f549ccb435cf056c28271ff74fd9b7ce05f50`
- modelName: `BORABORA-30`
- releaseDate: `2008-04-21`
- generalRolloutReference: `2008-05-12`
- systemType: ノーマル / 純Aタイプ / 30Φ / 先告知主体
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_RATE_CONFLICT`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG/REG/合成、1000円ゲーム数、BIG約305枚・REG最高119枚はパチマガスロマガの `シートラッド&30` 共通解析で250と同値。
- pacnkも30φのBIG/REGを丸め差の範囲で一致して掲載。
- 30φはハイビスカス点滅による準完全告知、先告知主体。20/25φ側は後告知主体で予告音/デジタルアクション搭載。
- RT/AT等なし、天井なし。
- 機械割は複数系列が競合するため平均せず `CONFLICT_PAYOUT_RATE`。

### v0.7 resetBehavior

- settingChangeBehavior: `NO_SPECIAL_GAMEPLAY_EFFECT_CONFIRMED`
- carryOverBehavior: `NOT_APPLICABLE_NO_CEILING_MODE_RT_ART_CONFIRMED`
- powerCycleBehavior: `NOT_APPLICABLE_NO_CEILING_MODE_RT_ART_CONFIRMED`
- gameCounterReset: `NOT_APPLICABLE_NO_CEILING`
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING`
- modeAfterReset: `NOT_APPLICABLE_NO_INTERNAL_MODE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE_NO_RT_ART_CZ_STATE`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `NONE_CONFIRMED`

## 今回の主要出典

取得日: 2026-09-01

- パチマガスロマガ「シートラッド&30」
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/56/okazaki_slot_56.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/56/a.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/56/c.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/56/e.php
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/56/h.php
- pacnk「シートラッド30 設定判別ツール」
  - https://pacnk.com/slot/tools/sh_ctoraddo2008b.html
- 5号機クロニクル「岡崎産業」
  - https://5goki.com/okazaki
- パチスロ業界初まとめ 更新情報5
  - https://slothistory.com/kousin_kako05.html
- マイクロオーダーサービス旧記事（2008-05-23）
  - https://plaza.rakuten.co.jp/mosnet/diaryall/

## 重複防止

- 既存249件の再追加禁止。
- 250 `シートラッド`、251 `シートラッド30` も再追加禁止。
- 20/25φ側と30φ側は性能数値が共通解析されるが、型式が `BORABORA / BORABORA-30` と分かれ、告知方式・演出仕様も異なるため全機種方針上は別レコード。
- 4/21と5/12は同一2機種の先行/一般導入定義差として保持し、5/12に再度別レコードを作らない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準251件地点。時系列上の最新一般導入確認日は2008-05-12 `一騎当千 / 一騎当千A`、ただし250/251は2008-04-21へ遡及追加済み。**
2. **2008-05-12同日群を再監査し、`一騎当千 / 一騎当千A / シートラッド / シートラッド30` 以外の未処理機がないか確認。シートラッド2機種は再追加禁止。**
3. その後、2008年5月の `格闘美神 武龍 / 潮風-30（表記揺れ: 潮風25/潮風30） / 監獄JACK / ドキューン / ニューパルサー エボリューション / ソニックライブ / 熱血硬派くにおくん / ヒミコスタイル / 大繁盛本舗 江戸ver.` 等を具体導入日で並べ、最古の未処理から進める。
4. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
