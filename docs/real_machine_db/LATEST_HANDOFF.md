# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **348件地点 / 2009-03-01 タコスロ7R**。
- 同日群最優先候補だったニューギン `バトルアスリーテス大運動会`（型式 `バトルアスリーテスZ`）を調査し、**349件目**に追加。
- **既存349件の再追加禁止。**

## 349. バトルアスリーテス大運動会

record:
- `docs/real_machine_db/machines/2009-03-01_battle-athletes-daiundoukai.md`

要点:
- manufacturer: **ニューギン**
- formalModelName: **バトルアスリーテスZ**
- releaseDate: **2009-03-01（納品開始予定）**。必勝本は3/2導入開始予定、P-WORLDは2009年2月導入開始の月表記で定義差を保持。
- generation: **5号機**
- systemType: **ボーナス+RT / 一乃チャンス後50G RT / 最大8000G RT**
- BIG: **1/341.33 → 1/248.24**。
- REG: **1/512.00 → 1/372.36**。
- 一乃チャンス: **設定1〜5 1/655.36 / 設定6 1/595.78**。
- ボーナス合算: **1/156.04 → 1/119.16**。
- 50枚ベース: **36.08 / 36.50 / 36.93 / 37.37 / 37.82 / 38.73G**。旧解析DB単一値のため `ANALYSIS_SINGLE`。
- BIG約**308枚**、REG約**104枚**、一乃チャンス約**14枚+RT50G**。
- 一乃チャンス後50G RT中の特殊リプレイで最大8000G RTへ。必勝本の設定別突入期待度は **27.5 / 28.6 / 30.1 / 31.7 / 33.0 / 34.4%**。
- `coreStatus=COMPLETE_CORE_WITH_CONFLICTS`。

### 機械割CONFLICT

- P-WORLD市場掲載系列: **97.1 / 100.2 / 104.2 / 108.5 / 112.3 / 116.2%**。
- パチ&スロ必勝本シミュレート: **96.6 / 99.1 / 102.5 / 106.2 / 109.4 / 112.8%**。
- 平均せず別系列保持。

### RT純増CONFLICT

- P-WORLD: 8000G RT約**+0.3枚/G**。
- 必勝本: **+0.34〜+0.44枚/G**。
- 当時グリーンべると発表: **+0.4〜+0.6枚/G**。
- 条件/推定差の可能性があるため平均しない。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。旧パチマガに「攻め時・ヤメ時・設定変更時」項目の存在は確認したが本文未回収。設定変更時の50G RT/8000G RT/内部RT状態を推測しない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のRT残G/状態の直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の状態処理の本機固有資料未確定。
- `gameCounterReset`: **NOT_APPLICABLE_FOR_NORMAL_GAME_CEILING / RT_REMAINING_STATE_UNVERIFIED**。8000GはRT継続上限で通常ゲーム数天井ではない。
- `ceilingAfterReset`: **NO_NORMAL_GAME_CEILING_CONFIRMED_AFTER_RESEARCH**。短縮天井も確認なし。
- `modeAfterReset`: **NO_RESET_SPECIFIC_MODE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **DIRECT_DETECTION_UNVERIFIED**。ガックン/初期出目/ランプ/液晶等の直接判別資料未確定。
- 公開朝一専用当選率、リセット専用モード振分、恩恵発生率は確認なし。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00002965/
- https://www.p-world.co.jp/machine/database/5439
- https://p.hisshobon.jp/machine/1314/1/20121
- https://p.hisshobon.jp/machine/1314/1/19849
- https://p.hisshobon.jp/machine/1314/1/19851
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/09/newgin_slot_09.php
- https://slotmaniac.web.fc2.com/kaiseki/battleathletes.html
- https://w.atwiki.jp/5gouki/pages/148.html

## 2009-03-01境界監査

- 3/1 `タコスロ7R` は既存348。
- 3/1 `バトルアスリーテス大運動会` を今回349として追加。当時グリーンべるとが3/1納品開始予定を明記。
- 月単位候補として2009年3月には `スクール☆ウォーズ`、`ニューパルサー3`、`快盗天使ツインエンジェル2`、`ドラキュラ`、`スターマンアイズ`、`ジュードーズ` 等が存在することを確認。ただし **2009-03-01公開の記事日や月表記を実導入日と誤認しない**。次回は具体納品/導入日を一次・当時資料で確定して最古の未処理機から進める。
- 2/22以前の月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日未確定。具体日が判明し2/22以前なら正しい位置へ遡及追加する。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準349件地点。2009-03-01 バトルアスリーテス大運動会まで接続済み。既存349件の再追加禁止。**
2. **2009-03-01同日群の残りを具体日で再監査**する。候補は `スクール☆ウォーズ / ニューパルサー3 / 快盗天使ツインエンジェル2 / ドラキュラ / スターマンアイズ / ジュードーズ` 等。発表日・記事投稿日・発売月だけでは3/1扱いしない。
3. 同日群で具体日確定の未処理機がなければ3/2以降へ時系列で進む。
4. 過去月候補は具体日が明確になった場合のみ正しい位置へ遡及追加する。
5. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
6. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 349 バトルアスリーテス大運動会: `65689c4e907d297f39062e48560541cafcdc0d1c`
