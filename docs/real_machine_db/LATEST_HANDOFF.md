# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **856**
- latestRecordAdded: **パチスロ アレジン**（藤商事）— 2014-12-01
- latestRecord: `docs/real_machine_db/machines/2014-12-01_pachislot-areddin.md`
- chronologicalFrontier: **2014-12-01**
- frontierLatestMachine: **パチスロ アレジン**
- schema: **resetBehavior v0.7**
- status: **2014-12-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2014-12-02_TO_12-07_BOUNDARY_CLOSED / NEXT_2014-12-08_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.855 `2014-11-17_triple-crown-zero-one.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **855件 / frontier 2014-11-17 / 11-17_GROUP_OPEN_FINAL_AUDIT_REQUIRED**。
- 2014-11-17同日群を機種名・日付・メーカー系検索で再監査し、No.854「パチスロひぐらしのなく頃に煌」 / No.855「トリプルクラウンZERO-ONE」以外の未登録パチスロを安全に固定できなかったため **2014-11-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 続けて **2014-11-18〜11-30** を具体日・当時新台・HAZUSE系検索で境界監査。パチンコ機や発表日/アプリ配信日を混入せず、未登録パチスロの具体日を固定できなかったため **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- 次の強い具体日 **2014-12-01「パチスロ アレジン」**をNo.856として登録。
- 12/01同日群を追加監査し、今回アレジン以外の未登録パチスロを安全に固定できなかったため **2014-12-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2014-12-02〜12-07** 境界も未登録具体日を固定できずCLOSED。次の強い具体日は **2014-12-08「Dororonえん魔くん メ～ラめら」（KPE）**。

## No.856 — パチスロ アレジン

- record: `docs/real_machine_db/machines/2014-12-01_pachislot-areddin.md`
- manufacturer: **藤商事**
- releaseDate: **2014-12-01**（HAZUSE / 必勝本 / 当時解析一致）
- modelName: **アレジンFSF**
- inspectionNumber: **4S0446**
- systemType: **5号機 AT / アクセルAT / CZ搭載**

### 性能コア

- 機械割 canonical（HAZUSE丸め）: **97.2 / 98.6 / 101.3 / 104.8 / 108.8 / 116.5%**。
- 必勝本: **97.2 / 98.6 / 101.3 / 104.8 / 108.8 / 116.6%**、旧解析精密値: **97.20 / 98.58 / 101.32 / 104.84 / 108.78 / 116.55%**。丸め差として原値を保持し、平均しない。
- AT初当たり: **1/381.4 / 350.7 / 366.9 / 304.8 / 324.4 / 271.1**。
- 50枚ベース: **23.72G**（旧パチマガスロマガ）、HAZUSE **23.7G**。
- AT「アレジンタイム」: **1セット70G+α / 純増約3.0枚/G**（藤商事公式）。
- 通常天井: **1000G 10% / 1400G(AT2セット) 80% / 1400G(AT6セット) 10%**。

### resetBehavior v0.7

- 設定変更時:
  - 天井までのG数 **再抽選/RESET**
  - 内部モード **再抽選**
  - 内部状態 **再抽選**
  - アレスロ **再抽選**
  - 液晶ステージ **オアシス** / 液晶出目 **7・3・1**
- 電源OFF→ONのみ（必勝本直接表）:
  - 天井までのG数 **引継ぎ**
  - モード **引継ぎ**
  - 状態 **引継ぎ**
  - アレスロ **基本的に引継ぎ。ただし任意リセット可能**
  - 液晶ステージ **オアシス** / 液晶出目 **7・3・1**
- 設定変更時内部モード:
  - 天国準備 **全設定25.00%**
  - 天国 **設定1〜3 0.11% / 設定4〜6 0.46%**
  - 天国ロング **設定1〜3 0.05% / 設定4〜6 0.11%**
  - 超天国 **設定1〜3 0.01% / 設定4〜6 0.05%**
  - 低確A/B・高確も設定別精密表をレコードに保存済み。
- 設定変更時アレスロモード: **通常87.5% / 天国12.5%（全設定共通）**。
- 朝一判別:
  - 設定変更時は**アレスロ全消灯・1マス目から**、据え置き/通常電断は基本引継ぎ。
  - ただし電断時にもアレスロを任意リセット可能なので、全消灯だけで100%変更断定は禁止。
  - 設定変更時はフェイク前兆スタートという当時解析あり。
  - 液晶オアシス / 7・3・1は変更と電断の双方で同じため単独判別不可。
- 固定リセット短縮天井: **NONE_CONFIRMED**。
- ガックン本機固有契約: **UNVERIFIED_AFTER_RESEARCH**。主要判別情報はアレスロ/フェイク前兆で取得済み。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2014-11-17群 — CLOSED_FOR_CURRENT_RESEARCH

- No.854 **パチスロひぐらしのなく頃に煌**（オーイズミ）— 2014-11-17。
- No.855 **トリプルクラウンZERO-ONE**（清龍ゲームジャパン）— 2014-11-17。
- 今回、具体日・メーカー・当時新台一覧系を再検索し、追加未登録パチスロを固定できずCLOSED。

## 2014-11-18〜11-30境界 — CLOSED_FOR_CURRENT_RESEARCH

- 11/25等にパチンコ新台は存在するが、パチスロ本線へ混入させない。
- 発表日・納品予定・アプリ配信とホール導入開始を区別。
- 今回の再探索では未登録パチスロの強い具体日を固定できず、次の具体日を12/01へ進めた。

## 2014-12-01群 — CLOSED_FOR_CURRENT_RESEARCH

- No.856 **パチスロ アレジン**（藤商事）— 2014-12-01。
- HAZUSE / K-Navi系・当時解析・日付検索を追加監査し、今回ほかの未登録パチスロを安全に固定できなかった。

## 2014-12-02〜12-07境界 — CLOSED_FOR_CURRENT_RESEARCH

- 日別HAZUSE系検索・当時新台検索で追加の具体日パチスロを固定できず。
- 次の強い具体日は **2014-12-08**。

## 次候補 — 2014-12-08群

- **Dororonえん魔くん メ～ラめら**（KPE）
  - K-Naviでホール導入開始 **2014-12-08**。
  - ART初当たり **1/251.8 → 1/127.7**、機械割 **97.1 → 112.8%**、ART「ハルマゲどんタイム」**40G+α / 純増約2.3枚/G** まで事前確認済み。
- 12/08群は **OPEN**。次回は同機をNo.857候補として処理後、同日群を全メーカー横断監査する。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）。
- 新規本線を止めず、既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは「導入予定」「全国導入」「地域先行」「実ホール導入済み」を区別する。
- パチンコ新台をパチスロ本線へ混入させない。
- アレジンの2022年パチンコ版等、同名別機種の仕様を2014年機へ流用しない。
- アレジンのアレスロ全消灯は変更判別材料だが、電断時に任意リセット可能なので100%判別にしない。
- アレジンの設定変更時は天井Gを再抽選するが、固定短縮天井があるとは推定しない。
- カウボーイビバップの旧「400G以内81.25%」リセット解析は誤報訂正済み。canonical値として復活させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 856 / chronologicalFrontier 2014-12-01 / 12-01_GROUP_CLOSED / 12-02_TO_12-07_BOUNDARY_CLOSED** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.856を再確認。
3. **2014-12-08群OPEN → KPE「Dororonえん魔くん メ～ラめら」** をNo.857候補として処理。
4. その後12/08同日群を全メーカー横断監査し、追加未登録がなければCLOSED判定。
5. 遡及QAは `2007-03-19_kakumei-senshi-choshu-riki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### パチスロ アレジン
- 藤商事公式: `https://www.fujimarukun.co.jp/products/s_areddin/`
- HAZUSE: `https://hazuse.com/machine/pachislot/SX0110/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2481/1/49265`
- パチ＆スロ必勝本 天井&設定変更: `https://p.hisshobon.jp/machine/2481/1/49778`
- 旧パチマガスロマガ 50枚ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/17/c.php`
- 旧パチマガスロマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/17/a.php`
- グリーンべると: `https://web-greenbelt.jp/00007345/`
- すろぱちくえすと リセット判別: `https://www.slopachi-quest.com/article/areddin-reset-check/`
- すろぱちくえすと リセットモード: `https://www.slopachi-quest.com/article/%E3%82%A2%E3%83%AC%E3%82%B8%E3%83%B3-%E6%9C%9D%E4%B8%80%E8%A8%AD%E5%AE%9A%E5%A4%89%E6%9B%B4%E3%83%BB%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E6%99%82%E3%81%AF%E5%A4%A9%E5%9B%BD%E6%BA%96%E5%82%99%E3%83%A2/`
- モゲスロ: `https://moge-site.com/archives/2138`

### 次候補
- K-Navi Dororonえん魔くん メ～ラめら: `https://p-kn.com/slot/2151/`
