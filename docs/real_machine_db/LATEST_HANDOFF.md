# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **325 `回胴黙示録カイジ2`（ロデオ / 2008-12-08）**。
- 今回 **326 `ハイサイ蝶特急`（タイヨー / 2008-12-08）** を追加。
- **既存326件の再追加禁止。**

## 326. ハイサイ蝶特急

- record: `docs/real_machine_db/machines/2008-12-08_haisai-cho-tokkyu.md`
- manufacturer: タイヨー
- releaseDate: **2008-12-08**（ALL7当時導入予定）
- generation: 5号機
- systemType: **A+ART / 2027タイプ**。JAC BONUS成立後、ボーナスを入賞させず赤7揃いからART「蝶特急MODE」を消化。
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- ボーナス成立確率: **全設定共通 1/99.0（パチマガスロマガ） / 1/99.3（旧5号機DB）**。平均せず差を保持。
- 50枚/1000円ベース: **31.0G**（全設定共通、パチマガスロマガ）。
- JAC BONUS: **2G消化で終了**。本機は主に入賞させずARTを継続する方式。
- ART `蝶特急MODE`: 3択9枚ナビ型。純増は **約+1.8枚/G（パチマガスロマガ） vs 約+1.9枚/G（旧5号機DB）でCONFLICT**。
- 通常時 **501Gハマリで高確テーブル参照/天井高確**の旧解析あり。ボーナス直撃天井ではない。
- 機械割は **CONFLICT**：
  - 旧5号機DB: **96.0 / 98.3 / 99.8 / 103.1 / 105.6 / 110.0%**
  - パチマガスロマガ・シミュレート: **96.35 / 98.34 / 100.07 / 102.35 / 104.72 / 107.63%**
- `coreStatus: COMPLETE_CORE_WITH_CONFLICTS`

### resetBehavior（326）

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。旧5号機まとめwikiの「高確率状態について（未確定情報）」に **設定変更時1/2で高確テーブル参照**という候補値があるが、資料自身が未確定情報と明示。確定仕様へ昇格させない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の501Gカウンタ、高確/低確テーブル、ARTナビ残回数の扱いを本機固有資料で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみの501Gカウンタ、高確/ART状態処理を確定できず。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常時501G到達条件は確認済みだが設定変更/据え置き/電断でのカウンタ処理は直接根拠なし。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮ゲーム数は確認できず。
- `modeAfterReset`: **UNVERIFIED_CANDIDATE**。設定変更時高確50%候補のみ存在し、独立裏取りなし。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。50%高確候補は未確定情報のため確定恩恵に数えない。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/表示/朝一ART挙動による本機固有判別法は確定できず。
- 公開朝一数値: **候補として「設定変更時 高確テーブル1/2」**があるが `UNVERIFIED_SOURCE_EXPLICITLY_LABELS_INFORMATION_UNCONFIRMED`。確定値として使用禁止。

## 326主要出典

取得日: 2026-09-02

- https://www.all7.jp/plans/index/2008/12/10 — ALL7。当時新台導入予定、タイヨー、2008-12-08。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/a.php — パチマガスロマガ。2027タイプART、JAC BONUS 2G終了、ART約+1.8枚/G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/c.php — パチマガスロマガ。1000円あたり31.0G、赤7揃い/ボーナス成立全設定共通1/99.0。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/d.php — パチマガスロマガ。ボーナスを入賞させずARTを消化する方式。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/h.php — パチマガスロマガ。全設定共通ボーナス1/99.0、シミュレート機械割96.35〜107.63%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/66/taiyo_slot_66.php — パチマガスロマガ。当該機種に「攻め時・ヤメ時・設定変更時」項目が存在。本文未回収のためリセット確定根拠には未使用。
- https://w.atwiki.jp/5gouki/pages/132.html — 旧5号機まとめwiki。ART約+1.9枚/G、501G高確、REG1/99.3、機械割96.0〜110.0%、設定変更時1/2高確候補。ただし高確条件は同ページ自身が「未確定情報」と明示。

## 境界監査・重複防止

- **既存326件の再追加禁止。**
- 2008-12-08群では、ALL7に `いみそ～れ2 ピュアエディション プレミアムビスカス` が同日候補として掲載されるが、既存のピュアエディション25/30とのパネル/仕様同一性を確認してから独立追加可否を判断する。既存性能の安易な複製は禁止。
- `AうたテレQUEEN(80'sアイドルS)` もALL7 12/08一覧に見えるため、パチスロ対象機か別遊技機かを再確認してから本線へ含める。
- `いみそ～れ2バーニングエディション25/30` は2008年12月導入までは確認済みだが具体日未確定。12/08以前/同日と確定した場合のみ漏れ防止で遡及追加する。
- ハイサイ蝶特急の正式型式/検定番号、設定変更時1/2高確候補の独立裏取りは後続QA対象。

## 次回再開地点

1. **LATEST_HANDOFF基準326件地点 / 2008-12-08境界。**
2. まず同日候補 `AうたテレQUEEN(80'sアイドルS)` と `いみそ～れ2 ピュアエディション プレミアムビスカス` の対象/重複性を短く監査する。
3. 同日未処理パチスロがなければ、次の具体導入候補 **`鬼浜爆走紅蓮隊 爆音烈士編`（高砂 / ALL7 2008-12-14導入予定）** を本線として性能コア + v0.7 `resetBehavior` を収集する。
4. 12/08以前/同日に具体導入日付き漏れが見つかれば遡及挿入する。
5. 欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を含む検索語・資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
