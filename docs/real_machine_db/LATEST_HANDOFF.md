# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **826**
- latestRecordAdded: **パチスロ蒼天の拳2**（Sammy / サミー）— 2014-06-16
- latestRecord: `docs/real_machine_db/machines/2014-06-16_souten-no-ken-2.md`
- chronologicalFrontier: **2014-06-16**
- frontierLatestMachine: **パチスロ蒼天の拳2**
- schema: **resetBehavior v0.7**
- status: **2014-06-16_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、825件目 `2014-06-02_garou-densetsu-premium.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時の正本は **825件 / 2014-06-02 / 06-02_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- `2014-06-03～06-15 / パチスロ / 導入 / 新台`、K-Navi、当時業界記事、導入前資料を横断し、安全な具体日付き未登録5号機を今回固定できなかったため **06-03～06-15境界をCLOSED_FOR_CURRENT_RESEARCH** とした。
- 2014-06-09配信の蒼天の拳2体験アプリ資料は実機ホール導入前であり、06-09を導入日にしない。

## 今回追加 — パチスロ蒼天の拳2

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- formalModelName: **蒼天の拳2ZZ**。
- inspectionNumber: **4S0287**。
- hall start: **2014-06-16**。サミー2014-06-10プレスリリース、K-Navi、HAZUSEで一致。
- generation/system: **5号機 / AT / 自力小役解除 + 規定ゲーム数 / 継続率AT + ゲーム数上乗せAT**。
- payoutRate: **97.1 / 98.6 / 101.0 / 105.0 / 110.6 / 113.7%**。
- AT初当たり（HAZUSE精密値）: **1/299.0 / 1/290.9 / 1/280.8 / 1/252.8 / 1/218.5 / 1/204.8**。K-Naviは丸め表示。
- baseGamesPer50: **30.5G（設定1～4） / 30.6G（設定5～6）**。パチマガスロマガ・HAZUSE一致。
- AT純増: **約2.7枚/G**。
- 「宿命の刻」: **1セット約20G、継続率約70～89%**。
- 「激闘乱舞in上海」: **1セット30～200G**。
- maximum ceiling: **通常時777G + 最大32G前兆**。別に宿命の刻→激闘乱舞9連続非当選後、10回目で激闘乱舞確定の連続非当選天井あり。
- coreStatus: **COMPLETE_CORE**。

## パチスロ蒼天の拳2 — resetBehavior v0.7

- settingChangeBehavior: **天井G RESET / 規定ゲーム数モード再抽選 / 内部状態再抽選 / 朝一ステージ再抽選**。
- settingChange mode: 通常AT後のテーブルA/B/Cとは別の **設定変更時専用テーブル**を参照。
- carryOverBehavior / powerCycleBehavior: 当時攻略資料では設定変更なし電源OFF→ON（据え置き）で **天井・内部モード・内部状態を引き継ぎ、ステージのみ再抽選**。
- gameCounterReset: 設定変更 **RESET** / 据え置き **CARRYOVER**。
- ceilingAfterReset: 固定のリセット専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。777G上限は基本維持し、専用テーブルによるゾーン優遇と区別。
- modeAfterReset: リセット後の前兆込み強ゾーン目安 **115～132 / 240～257 / 440～457 / 640～657G**。
- stateAfterReset 公開値:
  - 設定1: 低確50.0 / 通常25.0 / 天国25.0%
  - 設定2: 45.0 / 27.5 / 27.5%
  - 設定3: 40.0 / 30.0 / 30.0%
  - 設定4: 35.0 / 32.5 / 32.5%
  - 設定5: 32.5 / 32.5 / 35.0%
  - 設定6: 30.0 / 32.5 / 37.5%
- resetBenefits: 設定1でも朝一 **25%天国**、設定6 **37.5%天国**。リセット専用規定Gテーブルで250/450/650G前後が通常より強い。
- resetDetection: **ガックン判別可能**とする当時資料あり。ただし左リールは疑似リールなので **左以外のリールを見る**必要がある。ステージは設定変更/据え置き双方で再抽選のため単独判別不可。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBehaviorQA: **PARTIAL**（固定短縮天井なしを確認。全専用テーブル振り分けは物差しDB対象外）。

## 再探索 / safeguards — 蒼天の拳2

- `パチスロ蒼天の拳2 / 蒼天の拳2 / 蒼天の拳2ZZ / 4S0287 / Sammy / サミー` に `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 777G / モード / テーブル / 状態 / 天国 / ガックン / 50枚 / 1000円` を組み合わせて再探索。
- サミー公式プレス、K-Navi、HAZUSE、パチマガスロマガ、2014年当時の期待値見える化、すろぱちくえすと、後年整理資料を横断。
- 後年の「蒼天の拳 朋友」や2026年北斗系など別機種のリセット仕様を混入しない。
- 新台初日1回目初当たり614件の実戦集計は、解析値と分離して補助根拠としてのみ保持。

## 2014-06-16群 / 次候補

- 2014-06-16の同日群監査で、**テンパイラッシュ**（パイオニア）も同日導入であることをパチ7から確認。
- したがって06-16群は **OPEN** のまま。
- 次回は **「テンパイラッシュ」（パイオニア）**を次の未処理候補として、型式・性能コア + v0.7 resetBehaviorを収集する。
- テンパイラッシュ処理後、06-16同日群をK-Navi / パチ7 / HAZUSE / 当時業界資料で再監査し、漏れがなければCLOSEDへ進む。

## 遡及 resetBehavior QA

- 直前handoffからQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`。
- 新規時系列収集を止めず、余力のあるリレーで既存PARTIALへv0.7を遡及する。

## 次回再開地点

1. **recordCount 826 / chronologicalFrontier 2014-06-16 / 06-16_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 826件目を再確認。
3. 次の未処理候補 **2014-06-16「テンパイラッシュ」（パイオニア）**を収集。
4. その後06-16同日群を全メーカー横断で再監査し、追加未処理機がなければCLOSED。
5. 遡及QAは `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ蒼天の拳2
- サミー PR TIMES: `https://prtimes.jp/main/html/rd/p/000000001.000010410.html`
- K-Navi: `https://p-kn.com/slot/2070/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0287/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/4S0287/genre/201/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/4S0287/genre/209/`
- パチマガスロマガ 小役/1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/143/c.php`
- 期待値見える化 朝一: `https://slotjin.com/slot/soutennoken2-reset/`
- すろぱちくえすと 朝一: `https://www.slopachi-quest.com/article/souten2-resets/`
- Pachinavi: `https://pachinavi.net/machines/souten-no-ken-2/`

### 次候補 / 境界
- パチ7 テンパイラッシュ（導入日2014-06-16）: `https://pachiseven.jp/machines/4141/cutout/92`
