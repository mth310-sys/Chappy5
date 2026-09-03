# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **484**
- latestMachineAdded: **コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～**（アビリット / 2010-06-07主値・導入日CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_kouhei-saikyouden.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **コウヘイ最凶伝 ～地獄の閻魔覚醒の刻～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線483「南国育ちスペシャル-30」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **483** / chronologicalFrontier **2010-06-07**。
- LATEST_HANDOFF指定の2010-06-07同日群最優先候補「コウヘイ最凶伝」をrepo未登録確認後484件目として追加。
- 導入日はHAZUSE **2010-06-04** / パチビー・スロマニアックス **2010-06-07** で競合。平均化せず `CONFLICT` を保持し、主値は6/7。
- 現行P-WORLDは企業承継後のコナミアミューズメント表記だが、2010年当時メーカーはアビリットとして記録。

## 484 — コウヘイ最凶伝 要約

- メーカー: **アビリット**
- 型式名: **コウヘイサイキョウデン**
- 検定番号: **9S1392**
- 導入主値: **2010-06-07** / HAZUSE **2010-06-04** → `CONFLICT`
- 世代/タイプ: **5号機 / ボーナス＋ART / CZ / 天井 / セット継続＋ストック**
- PAYOUT: **97.0 / 98.4 / 99.9 / 102.7 / 105.9 / 110.3%**
- BIG: **1/1310.7 / 1/1310.7 / 1/1260.3 / 1/1260.3 / 1/1213.6 / 1/1213.6**
- ボーナス合算: **1/163.8 / 1/163.8 / 1/154.9 / 1/152.8 / 1/145.6 / 1/143.1**
- ART初当たり: **1/390 / 1/350 / 1/380 / 1/330 / 1/360 / 1/290**
- 50枚ベース: **29.84 / 29.84 / 29.90 / 29.91 / 29.96 / 29.98G**（旧パチマガ単一資料）
- BIG: **約265枚** / BG: **約96枚** / CT1: **約72枚** / CT2: **約36枚**
- ART「閻魔ラッシュ」: **45G / 約+1.2枚/G**（分類表示には約+1.24枚/G）
- 天井候補: **444 / 555 / 666 / 777 / 888 / 999 / 1111G**、最大1111G
- 別天井: **ART間の中段非道任務5回目でART確定**
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL_POWER_CYCLE_UNVERIFIED**

## resetBehavior v0.7 — コウヘイ最凶伝

- **設定変更**: パチ＆スロ必勝本本機専用資料で、**天井までのゲーム数をリセットし通常Aスタート**を直接確認。CrankySeven/pacnkでもゲーム数リセットを照合。
- **据え置き**: 設定変更時のみclearされる仕様は確認したが、「据え置き時は前日ゲーム数引継ぎ」という本機固有の直接文言は未回収。`PARTIAL_INFERRED_FROM_RESET_SPEC / DIRECT_STAYOVER_TEXT_UNVERIFIED`。
- **電源OFF→ON**: 天井カウンタ、通常A/B、ARTストック、前兆、CZ状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 設定変更でボーナス間規定ゲーム数をclear。設定変更専用の固定短縮天井数値は確認されず。
- **モード**: 設定変更後 **通常Aスタート CONFIRMED**。
- **状態**: 通常A開始以外のARTストック/CZ/前兆等clear-retainは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵**: 通常Aスタート以外の数値化された優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: **前日天井進捗が設定変更で消える**。
- **変更判別**: ガックン、初期出目等は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 朝一当選率、恩恵発生率、変更専用モード振分率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **SETTING_CHANGE_COUNTER_CLEAR_NORMAL_A_CONFIRMED_POWER_CYCLE_DETECTION_STAYOVER_DIRECT_TEXT_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### コウヘイ最凶伝
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1593/1/24380`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5944`
- HAZUSE: `https://data.hazuse.com/?machine_code=9S1392`
- パチビー: `https://www.pachibee.jp/machines/index/210040003`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/abilit_slot/25/c.php`
- CrankySeven: `https://crankyseven.com/sp/tenjo-5ka.htm`
- pacnk: `https://pacnk.com/slot/tools/sh_kouhei.html`
- スロマニアックス: `https://smph.slo-maniax.com/ard/machine/slot/index.html?machine_id=1207`

## 次回再開地点

1. **recordCount 484 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。未処理候補: **サンサンオアシス キュイーンVer. / メタルスラッグSV-001 / ガメラ / ニューパルサーV2 / マジックライアン / とんでも戦士ムテキング**。各repo重複確認後、最古未処理を次に追加する。
3. **ゴッドハンターV**はK-Naviが2010-06-07、パチビー月間スケジュールが2010-06-08で日付競合。6/7同日群を閉じる前後で別系統資料を追加照合し、推測せずCONFLICT/定義差を判定する。
4. コウヘイ最凶伝の据え置き直接文言、単純電源OFF→ON、ARTストック/CZ/前兆の設定変更時処理、ガックン等変更判別は追加探索余地あり。ただし新規収集を止めない。
5. 競合は平均化せず保持。現行P-WORLDの企業承継後メーカー名と2010年当時メーカーを混同しない。
