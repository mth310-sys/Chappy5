# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **614**
- latestMachineAdded: **押忍！番長2**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2011-10-24_osu-bancho2.md`
- chronologicalFrontier: **2011-10-24**
- frontierLatestExactDateMachine: **押忍！番長2**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE_BOUNDARY_AUDIT_AFTER_CLOSING_2011-10-24_GROUP**

## 今回の本線追加 — 押忍！番長2

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「バツ＆テリー」を再取得して開始。
- 開始時正本は **recordCount 613 / chronologicalFrontier 2011-10-24**。INDEXは旧19件地点のままなので、README規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- repo code searchで「押忍！番長2」未検出。想定パス `docs/real_machine_db/machines/2011-10-24_osu-bancho2.md` を直接fetchし404、未登録を確認。
- K-Navi 2011年10月カレンダーで **2011-10-24全国一斉導入開始**。同日パチスロ群はバツ＆テリー / 押忍！番長2の2機種で、両方登録済みになったため10/24同日群を閉じる。

### 性能コア

- 5号機 / 疑似ボーナス+ART / ゲーム数管理 / 上乗せ型ART。
- 型式: **オスバンチョウ2Q**、検定番号: **1S0622**。
- 機械割主系列: **96.8 / 97.6 / 99.9 / 104.9 / 109.5 / 114.1%**。HAZUSE、アタリ7、スロパチクエストで一致。
- 後年5号機クロニクルは **97.4 / 99.0 / 101.5 / 104.8 / 109.6 / 113.4%** の別系列を掲載。定義差を特定できないため平均せずCONFLICT保持。
- ボーナス合算: **1/215.1 / 1/210.2 / 1/208.3 / 1/192.3 / 1/191.4 / 1/178.3**。
- 頂RUSH初当たり: **1/588.0 / 1/515.8 / 1/540.1 / 1/414.4 / 1/453.0 / 1/268.3**。
- ボーナス+ART合算: **1/157.5 / 1/149.3 / 1/150.3 / 1/131.3 / 1/134.6 / 1/107.1**。
- 超番長ボーナス: **1/16384.0**（全設定共通）。
- 50枚ベース: **約31.5G/50枚**。
- 頂RUSH: **1セット50G+α、約+2.0枚/G**。
- 番長ボーナス: **60〜300G、平均約160枚**。REG: **30G、平均約60枚**。超番長: **純増約300枚**。
- 通常天井: **ボーナス間最大999Gでボーナス当選**。ARTを挟んでもボーナス間カウント継続の解析資料あり。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- `settingChangeBehavior`: **RESET_MODE_CONFIRMED / HIGH_A_LOTTERY_25PCT_CONFIRMED**。
- `modeAfterReset`: **RESET_MODE_100PCT_CONFIRMED**。HAZUSEが「リセットモードへは設定変更後のみ移行」と明記。
- `gameCounterReset`: **RESET_AND_RESTART_IN_RESET_MODE_CONFIRMED**。設定変更後は前日モードの規定G進捗を継続せず、専用リセットモード基準で再スタートする仕様として記録。
- `ceilingAfterReset`: **999G / NO_SHORTENING_VS_NORMAL_A_B**。通常A/Bも999G。天国A/Bは96G。
- `stateAfterReset`: **HIGH_A_25PCT_CONFIRMED**。設定変更時、全設定共通25.00%で高確Aへ。
- `resetBenefits`: **DEDICATED_RESET_MODE / BB_SELECTION_70PCT_PLUS / HIGH_A_25PCT**。リセットモードはボーナス当選時BB選択率70%以上。
- `resetPenalties`: **PREVIOUS_GAME_PROGRESS_LOST_BY_RESET_MODE_RESTART**。前日ハマリ進捗は失われる。最大天井短縮はなし。
- `resetDetection`: **ZONE_BEHAVIOR_REFERENCE_ONLY / DIRECT_GAKKUN_POWER_ON_DETECTION_UNVERIFIED_AFTER_RESEARCH**。リセットモードは200/400/600G台が期待ゾーン。ガックン/初期出目/液晶/ランプ等の直接判別は未確定。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- resetQaStatus: **COMPLETE_RESET_CORE_WITH_CARRYOVER_POWER_CYCLE_AND_DETECTION_UNVERIFIED**。

### CONFLICT / 定義差

1. HAZUSE機種ページの導入開始日は **2010-10-24** と誤記。型式・検定番号・解析内容は本機と一致するが、releaseDate根拠には不採用。K-Navi/アタリ7の **2011-10-24** を採用。
2. 機械割は当時解析系複数一致の **96.8〜114.1%** 系列と、5号機クロニクル **97.4〜113.4%** 系列が競合。平均せず双方保持。
3. BB平均獲得はHAZUSE約160枚、5号機クロニクル約150枚。丸め/概算差候補としてCONFLICT note。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 614 / chronologicalFrontier 2011-10-24**から開始。
2. K-Navi 2011年10月カレンダー上、10/24パチスロ同日群は **バツ＆テリー / 押忍！番長2** の2機種で閉鎖済み。
3. 次回はまず **2011-10-25〜2011-11-06境界**を、メーカー別一覧・当時業界記事・古い導入DBで監査し、K-Naviに載らない未処理機がないか確認する。
4. 境界に未処理がなければ、次の強いアンカーは **2011-11-07**。確認済み候補は **必勝金閣寺物語～古都絢爛～（TAKASAGO） / ストリートファイターIV（エンターライズ） / キャッツ・アイ-恋ふたたび（オリンピア）**。同日群内の全機種を確認して最古未処理から進める。
5. repo code searchだけで未登録判定せず、表記揺れ・想定実パス直接fetch・tree実パスを確認する。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### 押忍！番長2
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- アタリ7: `https://www.atari7.com/slot/date1319863293.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0622/`
- HAZUSE AT/ART・内部モード: `https://hazuse.com/machine/pachislot/1S0622/genre/209/`
- スロパチクエスト: `https://www.slopachi-quest.com/kisyubetsu/osubantyo2/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/5067/greenbelt`
- 5号機クロニクル: `https://5goki.com/daito`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- K-Navi個別（11/7アンカー）: 必勝金閣寺物語～古都絢爛～ / ストリートファイターIV / キャッツ・アイ-恋ふたたび
