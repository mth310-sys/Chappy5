更新日: 2026-09-08

## 現在地点
- recordCount: **1029**
- latestRecordAdded: **SHAKE III（シェイク3）**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-12-19_shake-iii.md`
- chronologicalFrontier: **2016-12-19**
- frontierLatestMachine: **SHAKE III — No.1029**
- schema: **resetBehavior v0.7**
- status: **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2016-12-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1027実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1027件 / chronologicalFrontier 2016-12-12 / 12/12群OPEN** から継続。
- SANKYO `パチスロ 涼宮ハルヒの憂鬱` をNo.1028として追加。SANKYO公式、HAZUSE、P-WORLD、当時解析を横断。
- 12/12群をALL7/HAZUSE/メーカー・当時資料で再監査。`ANOTHER牙狼～炎の刻印～` はパチンコでありパチスロ本線対象外。既登録ニューペガサスRと今回ハルヒ以外の全国導入パチスロを固定できなかったため **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- HAZUSEカレンダー上の次全国導入日は12/19。12/13〜12/18について全国導入パチスロを固定できず **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 12/19群へ進み、先行候補の大都技研 `SHAKE III（シェイク3）` をNo.1029として追加。

## No.1028 — パチスロ 涼宮ハルヒの憂鬱
- manufacturer: **SANKYO**
- releaseDate canonical: **2016-12-12**
- formalModelName: **パチスロ涼宮ハルヒS**
- certificationNumber: **6S0873**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFLICTS_PRESERVED**

### performanceCore
- 機械割: **96.4 / 97.7 / 99.1 / 102.8 / 105.8 / 111.4%**。
- BIG: **全設定約1/1489**。
- ART初当たり canonical: **1/353 / 344 / 336 / 310 / 301 / 291**。
- 合成: **1/285 / 280 / 274 / 256 / 250 / 243**。
- ベース: **約38G/50枚**。
- ART純増: **約1.8枚/G**。
- BIG: **約312枚**。
- SANKYO公式/P-WORLD/HAZUSEをcanonical優先。ART設定3は1/336 vs 1/338、設定6は一部1/281、設定5機械割105.8 vs 105.6等をCONFLICTとして分離。
- 5号機クロニクルの本機ページには公式/P-WORLD/HAZUSEと大きく不整合なBIG/REG/ART系列があるため `CONFLICT_RETROSPECTIVE_5GOKI_SPEC_SERIES` として隔離し、混合・平均化していない。

### resetBehavior v0.7
- ゲーム数天井: **ART間1000G**。途中のBIGではリセットされず、ART当選でリセット。
- 設定変更: **ART間天井RESET / 閉鎖ポイントRESET**。
- 据え置き/純電源OFF→ON: **ART間天井CARRYOVER / 閉鎖ポイントCARRYOVER**。
- 朝一ステージ: **憂鬱ステージ**。
- 設定変更専用の短縮天井・特別な朝一恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 内部高確/超高確、閉鎖ポイント用通常A/B/天国モードの設定変更/据え置き/純電断契約は、推測記事はあるが確定表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン等、本機固有の変更確定判別手段は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1029 — SHAKE III（シェイク3）
- manufacturer: **大都技研**
- releaseDate canonical: **2016-12-19**
- formalModelName: **シェイクⅢ/A4**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / 疑似ボーナス連チャン型 / CZ**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CERTIFICATION_PENDING**

### performanceCore
- 機械割: **97.5 / 98.7 / 100.2 / 105.2 / 109.2 / 115.5%**。
- SHAKE BONUS/ART初当たり: **1/447.5 / 427.1 / 407.5 / 338.2 / 308.6 / 266.1**。
- ベース: **約44.4G/50枚**。
- ART純増: **約2.0枚/G**。
- SHAKE BONUS: **1セット40G+α**。
- ART間天井: **1500G**。
- CZ天井: キャラごとに連続演出失敗規定回数 **1〜5回**、規定到達でVJ高確率。
- 設定4機械割105.2/105.3%は平均せずCONFLICT保存。

### resetBehavior v0.7
- 設定変更: **ゲーム数天井RESET / CZ天井RESET**。
- 据え置き/純電源OFF→ON: **ゲーム数天井CARRYOVER / CZ天井CARRYOVER**。
- 朝一ステージ: 実戦上 **スラム or N.N.Y**。
- ガックン判別: **不可**と解析資料に明記。
- 設定変更専用の短縮天井・明確な朝一高確/CZ優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- CZ天井は前日のキャラ別失敗回数とイコライザランプ示唆を把握していれば、朝一設定変更推測材料になり得るが単独確定とはしない。
- 短期内部高確状態の設定変更/据え置き/純電断契約は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2016-12-12群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **ニューペガサスR**（エマ）— No.1027
- **パチスロ 涼宮ハルヒの憂鬱**（SANKYO）— No.1028

監査:
- ALL7 2016年12月一覧で12/12のパチスロとしてハルヒを確認。
- 同日掲載の `ANOTHER牙狼～炎の刻印～` はパチンコ。
- HAZUSE・メーカー/当時資料も横断し、追加の全国導入パチスロを今回固定できず群CLOSED。

## 2016-12-19群 — OPEN
登録済み:
- **SHAKE III（シェイク3）**（大都技研）— No.1029

未処理先行候補:
1. **スーパービンゴ リゾート**（ベルコ）
2. **パチスロニュースモモチャンEX**（ニューギン）
3. **パチスロ ロリポップチェーンソー**（藤商事）
4. **パチスロ犬夜叉**（ロデオ）
5. **麻雀格闘倶楽部2**（KPE）
- ALL7 2016年12月一覧でいずれも2016-12-19導入予定を確認。次回はメーカー/HAZUSE/P-WORLD/当時業界資料で実導入日・型式・重複を再固定してから順番に登録する。

## 境界監査
- **2016-12-12_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2016-12-13〜12-18: HAZUSEカレンダーの次全国導入日が12/19で、追加全国導入パチスロを今回固定できず **2016-12-13_TO_2016-12-18_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- chronologicalFrontierは **2016-12-19** へ前進。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1029を再取得。
2. **1029件 / chronologicalFrontier 2016-12-19 / 12/19群OPEN** を正本として継続。
3. 次未処理の **ベルコ `スーパービンゴ リゾート`** をNo.1030候補として処理。導入日・型式・検定番号・重複を再確認する。
4. その後、**ニュースモモチャンEX → ロリポップチェーンソー → 犬夜叉 → 麻雀格闘倶楽部2**を先行候補とし、12/19同日全メーカー監査を継続。
5. 各機種で性能コアに加え、設定変更/据え置き/純電源OFF→ON、ゲーム数/CZ/周期/ポイント、モード/状態、朝一恩恵/不利、変更判別、公開リセット数値を検索語・資料系統変更で徹底調査する。
6. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1028 パチスロ 涼宮ハルヒの憂鬱
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/682/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0873/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S0873/genre/207/
- P-WORLD: https://www.p-world.co.jp/machine/database/8194
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/27284/comment-page-2/
- 期待値見える化: https://slotjin.com/zone/haruhi/
- ゆうべる: https://yuberu-777.com/suzumiyaharuki-kaiseki/
- すろかい: https://slotkaiseki.hatenablog.com/entry/haruhi
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%80%8C%E6%B6%BC%E5%AE%AE%E3%83%8F%E3%83%AB%E3%83%92%E3%80%8D%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F

### No.1029 SHAKE III
- ピロ式: https://piro-shiki.com/shake3-kaiseki/
- pachislo-data: https://pachislo-data.com/daito/29605
- 期待値見える化: https://slotjin.com/zone/shake3/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/27579/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/shake3/
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2016/12/shake3

### 境界 / 次候補
- HAZUSE 新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年12月: https://www.all7.jp/plans/index/2016/12
