# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **311 `ランブルローズXX`（KPE / 2008-11-16）**。
- 2008-11-04〜15境界を再監査し、今回の検索範囲では311より前へ挿入すべき導入日確定の未収録5号機を新たに確定できなかった。
- **312 `クラッピーパーク`（ビーム / 型式 クラッピーパークAX）** を追加。
- 当時業界記事は **2008-11-16納品開始**、パチビーは **2008-11-17導入**。定義差を `CONFLICT/DEFINITION_DIFFERENCE` として保持し、主 `releaseDate` は一次性の高い当時業界納品開始日の2008-11-16を採用。
- 性能コア + v0.7 `resetBehavior` を同時収集。設定変更/据え置き/電源OFF→ON時のARTストック・救済カウンタ処理は、検索語/資料系統を変えた再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とした。

## 312. クラッピーパーク

- record: `docs/real_machine_db/machines/2008-11-16_crappy-park.md`
- manufacturer: ビーム
- modelNumber: `クラッピーパークAX`
- releaseDate: **2008-11-16（当時業界記事の納品開始）** / **2008-11-17（パチビー導入日）**。
- generation: 5号機
- systemType: ボーナス + RT + ストック型ART `クラッピーチャレンジ` / パンク回避型A+ART。
- 赤BIG: **1/229.95 / 1/229.15 / 1/225.99 / 1/224.44 / 1/222.16 / 1/218.45**。
- 白BIG: **設定1〜4 1/8192.00、設定5〜6 1/5461.33**。
- ボーナス合算: **1/223.67 / 1/222.91 / 1/219.92 / 1/218.45 / 1/213.47 / 1/210.05**。
- 機械割: **98.8 / 100.1 / 102.3 / 105.8 / 109.3 / 114.1%**。P-WORLD掲載。後年業界史資料でも設定6=114.1%を照合。
- 50枚ベース: **全設定30.73G/50枚**（高確中AT非考慮）。
- BIG: **約176枚**、215枚を超える払い出しで終了。
- ART `クラッピーチャレンジ`: **約+0.8枚/G**、原則次回ボーナスまで、単一ART最大**2000G**。
- コハク図柄: 約**1/132.66**。当時グリーンべるとでは約66%でART突入抽選、1抽選で複数セット抽選あり。
- ボーナス間救済: **1200G=ART1個 / 1500G=ART3個 / 1800G=ART10個**をストック。
- `coreStatus: COMPLETE_CORE`。

### resetBehavior（312）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の1200/1500/1800G救済カウンタ、未放出ARTストック、赤7後RTの処理を本機固有本文で確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の救済カウンタ/ARTストック/RT翌日処理は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみでの救済カウンタ、ARTストック、RT状態、初期表示処理は未確定。
- `gameCounterReset`: `UNVERIFIED_AFTER_RESEARCH`。通常1200/1500/1800G救済は確定、設定変更時のカウンタ扱いのみ未確定。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。設定変更専用短縮天井/固定朝一G数/専用ストック加算は確認できず。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。朝一専用モード/高確優遇モードの公開情報なし。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。未放出ARTストック、クラッピーチャレンジ、赤7後超高確率RTの変更/電断時状態処理は未確定。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。ARTストック消去等を推測で不利扱いしない。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/据え置き判別まで追加して再探索したが、本機固有確定手段を回収できず。
- `numericResetData`: 通常救済 **1200G=1個 / 1500G=3個 / 1800G=10個**。リセット固有数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetBehaviorQA: RESET_FIELDS_RESEARCHED_NORMAL_BONUS_INTERVAL_ART_STOCK_RELIEF_CONFIRMED_DEVICE_SPECIFIC_CHANGE_CARRYOVER_POWER_CYCLE_UNVERIFIED`。

## 312主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003868/ — 2008-11-16納品開始、ARTクラッピーチャレンジ、約+0.8枚/G、最大2000G、コハク約1/132・約66%抽選、赤7後RT、BIG約176枚。
- https://www.pachibee.jp/movies/index/1190 — 2008-11-17導入日、ビーム、ART/RT動画記録。
- https://www.p-world.co.jp/machine/database/5357 — BIG確率丸め値、機械割98.8〜114.1%、215枚超払い出し終了。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/h.php — 赤BIG/白BIG/合算の設定別精密値。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/c.php — 全設定30.73G/50枚、コハク1/132.66。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/beam_slot/02/a.php — ART/天井/同時成立、BIG約176枚。
- https://www.777town.net/explanation/slot_crappypark.jsp — 最大2000G、約+0.8枚/G、赤7後RT/ART構造の補助照合。
- https://www.4gamer.net/games/021/G002122/20110819050/ — 777TOWN配信時のメーカー発表転載、最大2000G・約+0.8枚/Gの第二照合。
- https://crankyseven.com/sp/tenjo-5ka.htm — ボーナス間1200G=ART1個、1500G=3個、1800G=10個。
- https://q-and-a.hatenablog.com/entry/2016/10/24/215400 — 型式クラッピーパークAX、2008-07-28検定通過記録。
- https://slothistory.com/kousin_kako07.html — 高機械割機一覧で114.1%の補助照合。

## 境界監査・重複防止

- **既存312件の再追加禁止。**
- 311 `ランブルローズXX` と312 `クラッピーパーク` は当時業界納品開始日ベースでは同じ2008-11-16。クラッピーパークのみ後年導入DBで11月17日表記があるため定義差を保持。
- 2008-11-17付グリーンべるとに `ぱちスロSTゴジラパチスロウォーズ` / `ぱちスロST行け!稲中卓球部` の発表記事があるが、記事日を導入日として扱わない。実納品/導入日を確定してから時系列投入する。
- `スロット代紋TAKE2` は2008-11-21発表、納品は2008-12-21予定のため11月キューへ混入させない。
- `鬼火` / `サイサイ` は2008-11-24納品開始資料があるため次境界の有力候補。
- `南国育ち30` は後発30φ版（2009-01-18納品候補）のため別機として後続処理。

## 次回再開地点

1. **LATEST_HANDOFF基準312件地点。2008-11-17〜23の未処理機を導入日/納品日ベースで最終監査する。**
2. `ぱちスロSTゴジラパチスロウォーズ` / `ぱちスロST行け!稲中卓球部` は2008-11-17発表日と実導入日を混同せず、実導入が11月17〜23なら先に処理する。
3. それ以前の確定未収録機がなければ **2008-11-24候補 `鬼火` / `サイサイ`** の同日順を確認し、最古の未処理機から性能コア＋v0.7 `resetBehavior` を収集する。
4. `海遊記` はベルコ公式で2008年11月登場まで確認済み。具体納品/導入日を確定して11月キュー内の正しい位置に挿入する。
5. resetBehavior遡及QAは2006-09群を継続し、`大山鳴動 漢みちスロ！` → `竹中直人のパチスロ太閤記` の順に欠損再探索する。
