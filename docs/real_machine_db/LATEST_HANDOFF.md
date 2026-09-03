# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **485**
- latestMachineAdded: **サンサンオアシス キュイーンVer.**（パイオニア / 2010-06-04導入開始・6/6納品予定の定義差）
- latestRecord: `docs/real_machine_db/machines/2010-06-04_sunsun-oasis-kyuin-ver.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線484「コウヘイ最凶伝」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **484** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFFの6/7同日群未処理候補だった「サンサンオアシス キュイーンVer.」をrepo未登録確認後に再監査。
- HAZUSEに **2010-06-04導入開始**、2010-04-23付グリーンべるとに **6月6日から納品予定**、パイオニア公式に **2010年6月発売**が残っていたため、前線より前の漏れとして485件目に遡及追加。
- 異なる日付定義を平均せず `DATE_DEFINITION_DIFFERENCE` として保持し、chronologicalFrontierは **2010-06-07のまま維持**。

## 485 — サンサンオアシス キュイーンVer. 要約

- メーカー: **パイオニア**
- 導入主値: **2010-06-04**（HAZUSE「導入開始日」）
- 日付補足: グリーンべると **2010-06-06から納品予定** / パイオニア公式 **2010年6月発売**
- 世代/タイプ: **5号機 / ノーマル / 完全告知 / 技術介入 / 25φ**
- PAYOUT: **97 / 99 / 101 / 104 / 107 / 110%**
- BIG: **1/297 / 1/287 / 1/276 / 1/265 / 1/253 / 1/240**
- REG: **1/496 / 1/464 / 1/434 / 1/399 / 1/370 / 1/344**
- 合算: **1/186 / 1/177 / 1/168 / 1/159 / 1/150 / 1/141**
- 50枚ベース: **約37G/1000円**
- BIG: **MAX312枚** / REG: **MAX125枚（技術介入時）**
- 通常ゲーム数天井・AT/ART/CZモード: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_RESET_NON_APPLICABLE_FIELDS_CONFIRMED_POWER_CYCLE_DETECTION_UNVERIFIED**

## resetBehavior v0.7 — サンサンオアシス キュイーンVer.

- **設定変更**: ボーナスのみのノーマルタイプで、天井/AT・ART・CZモード等の長期ゲーム数リセット対象は該当なし。本機固有のリール初期位置・ランプ等は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 宵越し天井/モード/ARTストック等の引継ぎ対象は `NOT_APPLICABLE`。
- **電源OFF→ON**: 天井/モード観点は該当なし。リール位置・ランプ等の見た目の本機固有挙動は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: `NOT_APPLICABLE`。リセット短縮天井なし。
- **モード/状態**: 朝一狙いへ影響するAT/ART/CZ長期内部モードは `NOT_APPLICABLE`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 数値化された設定変更専用恩恵・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `サンサンオアシス キュイーンVer. / レッドパネル / パイオニア`と設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/判別を組み替え、公式・P-WORLD・K-Navi・HAZUSE・当時業界記事を横断したが本機固有情報を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 朝一当選率、リセット恩恵率、変更専用モード振分率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **NORMAL_BONUS_ONLY_NO_CEILING_MODE_RESET_RELEVANCE_CONFIRMED_POWER_CYCLE_VISIBLE_STATE_AND_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### サンサンオアシス キュイーンVer.
- パイオニア公式2010年製品一覧: `https://www.slot-pioneer.co.jp/products/2010.html`
- パイオニア公式発売案内: `https://www.slot-pioneer.co.jp/information/ssoasis.html`
- グリーンべると: `https://web-greenbelt.jp/00002639/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5940`
- HAZUSE DATA: `https://data.hazuse.com/?machine_code=0S0163`
- K-Navi: `https://p-kn.com/slot/1208/`
- K-Navi機械割: `https://p-kn.com/slot/1208/19145/`

## 次回再開地点

1. **recordCount 485 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。未処理候補: **メタルスラッグSV-001 / ガメラ / ニューパルサーV2 / マジックライアン / とんでも戦士ムテキング**。各repo重複確認後、最古未処理を次に追加する。
3. **ゴッドハンターV**はK-Naviが2010-06-07、パチビー月間スケジュールが2010-06-08で日付競合。6/7同日群を閉じる前後で別系統資料を追加照合し、推測せずCONFLICT/定義差を判定する。
4. サンサンオアシスのformalModelName / approvalNumber、設定変更・単純電源OFF→ON時の見た目挙動、ガックン等変更判別は追加探索余地あり。ただし新規収集を止めない。
5. 競合値は平均化しない。納品予定日・導入開始日・発売月など定義の異なる日付は分離して保持する。
