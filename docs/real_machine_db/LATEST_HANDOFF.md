# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **346件地点 / 2009-02-22 スーパーリアル麻雀**。
- 直前handoffでは `ダッシュ勝平` をパチビーの2009-02-24導入候補としていたが、当時グリーンべるとで **2009-02-22から納品開始予定**を確認したため、同日群へ時系列遡及して **347件目**に追加。
- **既存347件の再追加禁止。**

## 347. ダッシュ勝平

record:
- `docs/real_machine_db/machines/2009-02-22_dash-kappei.md`

要点:
- formalModelName: **ダッシュ勝平2X**
- manufacturer: **オーイズミ**（OIZUMI NEOブランド／オリンピア発表）
- releaseDate: **2009-02-22（納品開始予定）**。パチビーは2009-02-24導入表記のため物流開始/ホール導入定義差として保持。
- generation: **5号機**
- systemType: **A+ART / 周期CZ / 押し順AT経由ART / 天井ART**
- BIG: **1/394.80 / 1/376.64 / 1/356.17 / 1/334.37 / 1/315.08 / 1/297.89**。
- REG: **1/496.48 / 1/471.48 / 1/448.88 / 1/422.81 / 1/399.61 / 1/372.36**。
- 合算: **1/219.92 / 1/209.38 / 1/198.59 / 1/186.71 / 1/176.17 / 1/165.49**。
- 50枚ベース: **全設定33.33G**。
- BIG約**252枚**、REG約**63枚**。
- ART `勝平タイム`: **34G完走型 / 約+1.3枚/G**。
- 通常時約100G周期でCZ `特訓ステージ`。P-WORLD天井欄は99G消化、本文は100G消化表記のためカウント差として保持。
- ボーナス間999G以上後のBBでスーパーBB、1333G+数Gで次回ボーナスまで継続ART。
- `coreStatus=COMPLETE_CORE_WITH_CONFLICTS`。

### 機械割CONFLICT

- P-WORLD: **95.7 / 97.9 / 100.4 / 104.9 / 108.3 / 111.6%**。
- パチマガスロマガ（シミュレート）: **95.32 / 97.41 / 100.14 / 103.19 / 106.80 / 110.02%**。
- 平均せず別系列保持。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CONFIRMED_STARTS_INTERNAL_CZ**。P-WORLDが設定変更後は「内部的にチャンスゾーンからスタート」と明記。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の周期G、999G/1333G天井、ARTナビストック、CZ/ART状態の本機固有直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の周期G、天井G、ナビストック、CZ/ART状態の直接資料未確定。
- `gameCounterReset`: **PARTIAL_CONFIRMED_RESET_SIDE_CZ_START**。設定変更後CZ開始は確定。ただし999G/1333G天井カウンタのリセット/引継ぎは未確定。
- `ceilingAfterReset`: **RESET_SPECIFIC_CZ_START_CONFIRMED / 999G_AND_1333G_COUNTER_TREATMENT_UNVERIFIED**。
- `modeAfterReset`: **RESET_TO_INTERNAL_CZ_CONFIRMED**。独立朝一モード振分率は確認なし。
- `stateAfterReset`: **INTERNAL_CZ_START_CONFIRMED**。ARTナビストック/ART残Gの保持消去は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **STARTS_IN_INTERNAL_CZ_CONFIRMED**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **POSSIBLE_BEHAVIORAL_HINT_CZ_START_ONLY / DIRECT_DETECTION_UNVERIFIED**。ガックン/初期出目/ランプ等は未確定。
- 公開朝一専用当選率、リセット専用モード振分、恩恵発生率は確認なし。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00002941/
- https://www.p-world.co.jp/machine/database/5464
- https://www.pachibee.jp/machines/movie/209090016
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/05/h.php
- https://p-kn.com/slot/913/

## 2009-02境界監査

- 2/22 `宇宙刑事ギャバン` は既存344。
- 2/22 `ラブゲッCHU` は既存345。
- 2/22 `スーパーリアル麻雀` は既存346。当時業界記事で2/22納品開始済み。
- 2/22 `ダッシュ勝平` を今回347として追加。当時グリーンべるとで2/22納品開始予定、パチビー2/24導入表記は定義差として保持。
- 2/22以前の月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日未確定。具体日が判明し2/22以前なら正しい位置へ遡及追加する。
- `バトルアスリーテス大運動会` / `タコスロ7R` は3/1納品予定確認済みで2月へ前倒ししない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準347件地点。2009-02-22 ダッシュ勝平まで接続済み。既存347件の再追加禁止。**
2. まず2009-02-22同日群残りと2/23〜2/28を具体日で最終監査する。発表会日を導入日と誤認しない。
3. `ダッシュ勝平` と `スーパーリアル麻雀` はパチビー上2/24導入だが、当時業界一次で2/22納品開始が取れているため再追加しない。
4. 2月末まで追加漏れがなければ **2009-03-01 `バトルアスリーテス大運動会` / `タコスロ7R` 同日群**へ進む。具体的な納品/導入順を再確認し最古から登録する。
5. 2/22以前の月単位候補は具体日探索を継続し、過去位置が明確に確定した場合のみ遡及挿入する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 347 ダッシュ勝平: `17e03acb9ab0c1f5fd0a29fabab448d19072c1b4`
