# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **782**
- latestMachineAddedByChronology: **パチスロ湘南純愛組！**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2013-12-02_shonan-junai-gumi.md`
- chronologicalFrontier: **2013-12-02**
- frontierLatestExactDateMachine: **パチスロ湘南純愛組！**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-12-02_GROUP__SHONAN_JUNAI_GUMI_DONE__NEXT_JUOH_OJA_NO_KIKAN**

## 今回の同期 / 重要事項

- 最新mainの README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード `2013-12-02_sugoslo.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 781 / chronologicalFrontier 2013-12-02 / 12-02群OPEN / 次候補「パチスロ湘南純愛組！」。
- GitHub内に既存レコードがない **パチスロ湘南純愛組！（ニューギン）** を782件目として追加。
- 2013-12-02群は **OPEN**。既知未処理候補は **パチスロ獣王 王者の帰還（Sammy）**。同機処理後に全メーカー横断再監査してCLOSED判定する。

## 今回追加 — パチスロ湘南純愛組！

### identity / 性能コア

- manufacturer: **ニューギン**。
- 型式: **湘南純愛組！-Z** / 検定番号 **3S0527**。
- releaseDate: **2013-12-02**。HAZUSEとパチビーで一致。グリーンべるとの12月1日納品開始予定とも整合。
- generation/system: **5号機 / A+ART / CZ / 周期・規定G数管理 / ゲーム数上乗せ / 天井**。
- 設定別PAYOUT: **95.99 / 99.14 / 102.08 / 104.88 / 107.92 / 110.49%**。HAZUSE/Re.designの丸め値とも一致。
- ART初当たり: **1/200.5 / 178.5 / 159.3 / 143.3 / 128.6 / 116.1**。
- ボーナス合成: **1/809.1 / 789.6 / 771.0 / 753.3 / 736.4 / 720.2**。
- baseGamesPer50: **約33G/50枚**。HAZUSE / Re.design一致。
- ART「鬼神RUSH / 龍神RUSH」: **1セット50G+α / 純増約1.8枚/G**。
- LEGEND BIG / BIG: **約204枚**、REG: **約48枚**。
- 天井: **ボーナス・ART間1024G**。当時記事では **+最大32G前兆**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- setting change: 2013-12-20の当時攻略記事で **ハマリゲーム数リセット / モード・状態再抽選**を確認。
- gameCounterReset: setting change **HAMARI_GAME_COUNT_RESET_CONFIRMED**。
- ceilingAfterReset: 前日天井進捗は設定変更で消える。設定変更専用の短縮天井/固定短縮値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: **MODE_RESELECT_CONFIRMED**。具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: **STATE_RESELECT_CONFIRMED**。具体振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- carry-over: 据え置き時の天井/クワトロテーブル/状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。設定変更時RESETの逆からKEEPを推定しない。
- power OFF→ON only: 単純電断時の保持/初期化契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: 設定変更専用の短縮天井・朝一高確確定・ART/CZ優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で前日の深いハマリ進捗が消えるため、宵越し天井狙いには不利。
- resetDetection: ガックン / 初期出目 / 液晶 / 鬼龍ランプ / Jack Potカウンター等による本機固有変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 公開確定事項は **ハマリG数リセット / モード再抽選 / 状態再抽選**。専用振り分け・朝一N G以内当選率等は未確認。

## safeguards / conflicts

- `CONFLICT_REG_SETTING3_1638_4_VS_1683_4`: 設定3REG合成はパチマガスロマガ **1/1638.4**、HAZUSE / Re.design **1/1683.4**。平均化せず双方保持。
- PAYOUTの95.99%系列と96.0%系列は丸め差として扱いCONFLICT化しない。
- 納品開始予定2013-12-01とホール導入2013-12-02は定義差として分離。
- 通常時の32/96/128G周期や約1000G Jack Potを設定変更専用の朝一恩恵数値へ流用しない。
- 設定変更時リセットから据え置き/純電断のKEEPを逆算しない。

## 2013-12-02群

- 処理済み: **うる星やつら3 / スゴスロ / パチスロ湘南純愛組！**。
- 既知未処理候補: **パチスロ獣王 王者の帰還**。
- status: **OPEN**。獣王処理後にALL7 / K-Navi / HAZUSE / P-WORLD / 当時業界記事等でメーカー横断監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線782件目を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 782 / chronologicalFrontier 2013-12-02 / 12-02群OPEN** から開始。
2. 次の未処理候補 **「パチスロ獣王 王者の帰還」（Sammy）** を性能コア + resetBehavior v0.7で783件目候補として処理。
3. 処理後、2013-12-02同日全メーカー監査を行い、漏れがなければCLOSED。
4. その後、次の具体導入日へ時系列順に進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で最初のresetBehavior欠損機を確定し補完。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- グリーンべると: `https://web-greenbelt.jp/00001151/`
- パチビー: `https://www.pachibee.jp/movies/index/10063`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0527/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7239`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/a.php`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/h-1.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/l.php`
- パチマガスロマガ 機種メニュー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/30/newgin_slot_30.php`
- Re.design: `https://www.redesign777.tokyo/Spec/SlotView?flag=True&id=S2015030209081401`
- pacnk: `https://pacnk.com/slot/2013/syounanjyunaigumi/top.php`
- メタボ教授（2013-12-20）: `https://metabopro.com/syounanjyunaigumi/`
