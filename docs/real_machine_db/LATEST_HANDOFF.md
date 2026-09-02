# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **345件地点 / 2009-02-22 ラブゲッCHU**。
- 直前handoffでは `スーパーリアル麻雀` を2/24導入候補としていたが、当時グリーンべるとで **2009-02-22から納品開始済み**を確認したため、同日群の時系列漏れとして遡及し **346件目**に追加。
- **既存346件の再追加禁止。**

## 346. スーパーリアル麻雀

record:
- `docs/real_machine_db/machines/2009-02-22_super-real-mahjong.md`

要点:
- manufacturer: **メーシー**
- releaseDate: **2009-02-22（納品開始済み）**。パチビーの2009-02-24導入表記とは物流開始/ホール導入定義差として保持。
- generation: **5号機**
- systemType: **A+ART / ボーナス後ART / 天井ART**
- settings: **1 / 4 / 6 / H**
- BIG: **1/481.88 / 1/455.11 / 1/420.10 / 1/390.10**。
- REG: **1/819.20 / 1/744.73 / 1/682.67 / 1/630.15**。
- ボーナス合算: **1/303.41 / 1/282.48 / 1/260.06 / 1/240.94**。
- 50枚ベース: **46.26 / 47.05 / 47.88 / 48.73G**。
- BIG約**308枚**、REG約**105枚**。
- ART `見つめタイム`: 本文値 **約+0.8枚/G**。機種タイプ欄では約+0.7枚/G表記があるため差を保持。
- 通常時**1500G**消化で次回ボーナスまで継続する天井ART。
- `coreStatus=COMPLETE_CORE_WITH_CONFLICTS`。

### 機械割CONFLICT

- P-WORLD/パチビー/pacnk系列: **94.7 / 98.6 / 104.7 / 109.7%**（pacnk精密94.72/98.58/104.69/109.74%）。
- パチマガスロマガ: **97.35 / 100.86 / 105.58 / 110.90%**。
- パチマガは逆押し攻略でPAYOUT平均+1.7%と明記するが、全設定差をその説明だけで完全に帰属できないため、平均せず別系列保持。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CONFIRMED_NO_RESET_OF_ART_CEILING_AND_ALL_STATES**。P-WORLD/パチビーが設定変更後も「ARTや天井までのゲーム数など、全ての状態がリセットされない」と明記。
- `carryOverBehavior`: **SETTING_CHANGE_PRESERVATION_CONFIRMED / ORDINARY_STAY_DIRECT_WORDING_UNVERIFIED**。設定変更を伴ってもART・天井G数等が保持される。通常の据え置き専用別処理を明示する資料は未回収。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のART残G・1500G天井G数・高確/CZ状態の直接資料未確定。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE_CONFIRMED**。1500G天井までのG数は設定変更後も保持。
- `ceilingAfterReset`: **NO_SHORTENING / CEILING_COUNTER_CARRYOVER_CONFIRMED**。
- `modeAfterReset`: **ALL_STATES_NOT_RESET_ON_SETTING_CHANGE_AS_PUBLISHED**。朝一専用モード振分は確認なし。
- `stateAfterReset`: **ART_AND_OTHER_STATES_PRESERVED_ON_SETTING_CHANGE_CONFIRMED**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_RESET_SPECIFIC_CONFIRMED**。ただし変更しても前日ハマリ/ART状態を消さない点自体が朝一価値へ影響し得るため、期待値推定はせず事実のみ保持。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等の本機固有変更判別資料未確定。
- 公開朝一専用当選率、リセット専用モード振分、恩恵発生率は今回確認なし。

### 競合/資料QA

- 機械割は上記2系列をCONFLICT保持し平均しない。
- ART純増はタイプ欄約+0.7枚/G、本文約+0.8枚/Gで表記差を保持。
- 5号機クロニクル現行ページにはBIG約204枚/REG約48枚、別ART名等の既知仕様と整合しない記述があり、資料汚染/別仕様混入疑いとして不採用。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00002993/
- https://www.p-world.co.jp/machine/database/5478
- https://www.pachibee.jp/machines/index/209080001
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/38/d.php
- https://pacnk.com/slot/tools/sh_supariarumajan.html

## 2009-02境界監査

- 2/22 `宇宙刑事ギャバン` は既存344。
- 2/22 `ラブゲッCHU` は既存345。
- 2/22 `スーパーリアル麻雀` を今回346として追加。パチビー2/24表記だけで後ろへ送らず、当時業界一次の2/22納品開始済みを採用。
- 2/22以前の月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日未確定のため推測挿入しない。具体日が判明し2/22以前なら正しい位置へ遡及追加する。
- `ダッシュ勝平` はパチビーで2009-02-24導入を確認済み。P-WORLDではBIG1/395〜1/298、REG1/496〜1/372、合算1/220〜1/165、BIG約252枚、REG約63枚、34G ART約+1.3枚/G、通常99G後CZ、ボーナス間999G以降BBでスーパーBB、1333G+数Gで次回ボーナスまでARTを確認済み。次回正式日/型式/機械割/50枚ベース/resetBehaviorを詰める。
- `バトルアスリーテス大運動会` / `タコスロ7R` は3/1納品予定確認済みで2月へ前倒ししない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準346件地点。2009-02-22 スーパーリアル麻雀まで接続済み。既存346件の再追加禁止。**
2. まず2/22同日群残りと2/23を具体日で最終監査する。
3. 追加漏れがなければ **2009-02-24 `ダッシュ勝平`** を最優先。正式導入/納品日、メーカー/型式、機械割、50枚ベース、ボーナス/ART最低性能、v0.7 resetBehaviorを収集する。
4. 同時に2/22以前の月単位候補の具体日探索を継続し、明確に過去位置が確定した場合のみ遡及挿入する。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 346 スーパーリアル麻雀: `35ddda7a897243a038fc24da7f61f9f067f2fbf7`
