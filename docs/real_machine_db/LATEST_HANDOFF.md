# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **487**
- latestMachineAdded: **ガメラ**（ロデオ / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_gamera-zs.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **ガメラ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前486「メタルスラッグSV-001」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **486** / chronologicalFrontier **2010-06-07**。過去チャット上の483地点ではなく最新mainを優先。
- 2010-06-07同日群候補「ガメラ」をrepo未登録確認後に487件目として追加。
- K-Navi/パチビーでホール導入 **2010-06-07**、グリーンべるとで納品 **2010-06-06開始予定**を確認。P-WORLDは2010年06月。
- 2021年6.1号機「パチスロ ガメラ」および2024年「ガメラ2」は同名後継機のため、resetBehavior再探索時に型式・導入年で明示除外。
- chronologicalFrontierは **2010-06-07** のまま同日群を継続する。

## 487 — ガメラ 要約

- メーカー: **ロデオ**
- 型式名: **ガメラZS**
- 検定番号: **9S1450**
- 導入: **2010-06-07**（納品開始予定2010-06-06との定義差あり）
- 世代/タイプ: **5号機 / ボーナス+無限RT / ボーナス中RT抽選 / パンク回避型RT**
- 機械割: **96.4 / 98.9 / 101.8 / 104.8 / 108.1 / 112.8%**
- BIG: **1/376.6 / 1/362.1 / 1/348.6 / 1/336.1 / 1/326.0 / 1/315.1**
- MIDDLE BONUS: **1/376.6 / 1/362.1 / 1/348.6 / 1/321.3 / 1/297.9 / 1/277.7**
- 合算: **1/188.3 / 1/181.0 / 1/174.3 / 1/164.3 / 1/155.7 / 1/147.6**
- 50枚ベース: **34.0 / 34.5 / 35.0 / 35.5 / 36.0 / 36.5G**
- BIG約**300枚** / MIDDLE BONUS約**100枚**
- RT「ガメラモード」: **現状維持型・次回ボーナスまで継続・最大88%ループ**
- RT継続率: **9 / 50 / 66 / 75 / 82 / 88%**
- 天井: **ボーナス間1000G以上後のボーナス終了後にRT確定**
- coreStatus: **COMPLETE_CORE_RESET_DIRECT_EVIDENCE_PARTIAL**

## resetBehavior v0.7 — ガメラ

- **設定変更**: 2010年版固有の高信頼直接本文で、1000G天井カウンタやRTループ権利の設定変更処理を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 天井進捗・RT状態/ループ権利の引継ぎを2010年版固有資料で直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井、RT状態、液晶/内部状態の処理を直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常天井「ボーナス間1000G以上後のボーナス終了後RT確定」はP-WORLDで確定。設定変更時のリセット/引継ぎは未確定。
- **モード・状態**: AT機型のゲーム数モードは確認なし。RT継続率/ループ状態は存在するが設定変更時処理は未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 設定変更専用の短縮天井、高確/RT優遇、朝一当選率等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶、ランプ等の2010年版固有変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **重要な混同防止**: 2021年版ガメラの「設定変更900G+α」「裏ガメラモード約10.5%」「有利区間」「電源OFF引継ぎ」は別機種のため採用禁止。
- resetBehaviorQA: **NORMAL_CEILING_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_RT_STATE_DETECTION_UNVERIFIED_2021_NAMESAKE_EXPLICITLY_EXCLUDED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### ガメラ
- P-WORLD: `https://www.p-world.co.jp/machine/database/5935`
- K-Navi機種ページ: `https://p-kn.com/slot/1210/`
- K-Navi 1000円あたりゲーム数: `https://p-kn.com/slot/1210/19020/`
- K-Navi ガメラモード(RT): `https://p-kn.com/slot/1210/18964/`
- パチビー: `https://www.pachibee.jp/machines/about/210040004`
- グリーンべると: `https://news.p-world.co.jp/articles/3942/greenbelt`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/54/a.php`
- 5号機クロニクル: `https://5goki.com/rodeo`

## 次回再開地点

1. **recordCount 487 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。残る未処理候補: **ニューパルサーV2 / マジックライアン / とんでも戦士ムテキング**。各repo重複確認後、最古未処理を次に追加する。
3. **南国育ちスペシャル-30**は既登録。別型式/重複を同日群終了時に再確認するが、同じレコードを追加しない。
4. **ゴッドハンターV**はK-Naviが2010-06-07、パチビー月間スケジュールが2010-06-08で日付競合。6/7同日群を閉じる前後で別系統資料を追加照合し、推測せずCONFLICT/定義差を判定する。
5. ガメラの設定変更時1000G天井処理、据え置き、電源OFF→ON、RTループ状態、ガックン等変更判別は追加探索余地あり。ただし2021年版情報を混入させず、新規収集を止めない。
6. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
