更新日: 2026-09-09

## 現在地点
- recordCount: **1075**
- latestRecordAdded: **忍魂 ～暁ノ章～**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_shinobidamashii-akatsuki.md`
- chronologicalFrontier: **2017-05-08**
- frontierLatestMachine: **忍魂 ～暁ノ章～ — No.1075**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1074「パチスロ 呪怨」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1074件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN**。
- 次未処理 **「忍魂 ～暁ノ章～」** をNo.1075として登録。
- パチビー/K-Navi/一撃/すろぱちくえすとで導入日 **2017-05-08** 一致。2017-04-17グリーンべると業界記事の「納品5月7日開始」とも整合。
- 型式は **忍魂暁ノ章／A2**。検定番号 **6S0645** は後年実機整理資料で確認したが、公的/当時一次資料の直接照合を固定できなかったため ANALYSIS_SINGLE として限定保持。
- 通常機械割 **98.1/98.9/100.9/104.9/107.7/110.6%**、完全攻略時 **100.1/101.6/103.6/106.1/110.0/112.8%**。技術介入差として別定義保持。
- BIG **1/343.1→1/329.3**、REG **1/642.5→1/565.0**、ART初当たり **1/713.4→1/490.4**、ベース約 **33G/50枚**、ART純増約 **1.1枚/G**、BIG203枚、REG56枚、ART1セット50G+α。
- 通常天井は **ボーナスorART間968G+前兆**。
- 設定変更時は天井ゲーム数RESETだが、**忍ノ破片累積ポイントはCARRYOVER**。液晶は滝ステージ（昼）。
- 純電源OFF→ONでは天井・忍ノ破片・液晶ステージCARRYOVER。
- 据え置き比較表では天井CARRYOVER / 忍ノ破片CARRYOVER / 状態CARRYOVERを確認。
- 設定変更時および純電断時の内部状態は当時一撃資料でも「調査中」で、検索語・資料系統を変えた再探索後も本機固有契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定短縮天井、高確保証数値、朝一専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックンは大都機一般論を本機固有確定契約へ昇格させず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 2017-05-08群は **ラッキーベガス** が未処理のためOPENを維持。
- ラッキーベガスはパチビー/K-Navi/コナミ公式アーカイブで **KPE / 2017-05-08** を確認済み。次回No.1076候補として処理する。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先し今回は未更新。

## No.1075 — 忍魂 ～暁ノ章～
- manufacturer: **大都技研**
- releaseDate: **2017-05-08**
- formalModelName: **忍魂暁ノ章／A2**
- certificationNumber: **6S0645**（ANALYSIS_SINGLE / primary corroboration pending）
- generation/system: **5号機 / 5.5号機 / A+ART / 技術介入**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 通常機械割: **98.1 / 98.9 / 100.9 / 104.9 / 107.7 / 110.6%**。
- 完全攻略時: **100.1 / 101.6 / 103.6 / 106.1 / 110.0 / 112.8%**。
- BIG: **1/343.1 / 341.3 / 339.6 / 337.8 / 336.1 / 329.3**。
- REG: **1/642.5 / 636.2 / 618.3 / 601.2 / 590.4 / 565.0**。
- ART初当たり: **1/713.4 / 626.1 / 638.8 / 560.9 / 574.1 / 490.4**。
- 50枚ベース: **約33G**。
- ART純増: **約1.1枚/G**。別資料のボーナス込み約1.5枚/Gは定義差として別保持。
- BIG203枚 / REG56枚 / ART「月光ノ刻」1セット50G+α。
- 通常天井: **ボーナスorART間968G+前兆**。

### resetBehavior v0.7
- settingChange: 天井RESET / 忍ノ破片CARRYOVER / 滝ステージ（昼） / state `UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 天井CARRYOVER / 忍ノ破片CARRYOVER / 状態CARRYOVER。
- powerCycle: 天井CARRYOVER / 忍ノ破片CARRYOVER / 液晶ステージCARRYOVER / state `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 固定短縮なし `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 朝一専用モード振り分け `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBenefits: **忍ノ破片累積を設定変更でも維持**。前日高ポイントなら朝一価値が残る。
- resetPenalties: **前日の968G天井進捗を消去**。
- resetDetection: 滝/昼開始は設定変更契約だが据え置き資料にも昼表記があり単独確定不可。
- deterministic machine-specific gakkun: `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-08群監査
- status: **OPEN**。
- 登録済み:
  1. パチスロ マクロスフロンティア3 — No.1072
  2. パチスロサクラ大戦～熱き血潮に～ — No.1073
  3. パチスロ 呪怨 — No.1074
  4. 忍魂 ～暁ノ章～ — No.1075
- 次未処理候補:
  1. **ラッキーベガス**（KPE）— パチビー/K-Navi/コナミ公式アーカイブで2017-05-08を確認済み。
- ラッキーベガス処理後に5/8同日全メーカー横断監査を行い、漏れがなければCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1075を再取得。
2. **1075件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN** を正本として継続。
3. 次未処理 **「ラッキーベガス」** をNo.1076候補として性能コア+resetBehavior v0.7まで処理。
4. 5/8群の全メーカー横断監査後にCLOSED判定し、次の日付境界へ進む。
5. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1075 忍魂 ～暁ノ章～
- パチビー: https://www.pachibee.jp/machines/index/217040006
- K-Navi: https://p-kn.com/slot/2774/
- 一撃 機種トップ: https://1geki.jp/slot/s_shinobi_akatuki/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_shinobi_akatuki/3/
- 一撃 ART概要: https://1geki.jp/slot/s_shinobi_akatuki/81/
- 一撃 忍ノ破片: https://1geki.jp/slot/s_shinobi_akatuki/44/
- すろぱちくえすと: https://www.slopachi-quest.com/article/shinobidamashii3/
- グリーンべると: https://web-greenbelt.jp/00009505/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/sinobitamasiiakatuki
- 愛品館実機: https://www.aihin.co.jp/new/news-1007837/
- 後年実機整理（検定番号限定参照）: https://note.com/famous_spirea792/n/n98a6e53ba495

### 次候補 / 5月8日群
- コナミ公式アーカイブ ラッキーベガス: https://www.konami.com/amusement/psm/archive/ps/2017/luckyvegas/
- パチビー ラッキーベガス: https://www.pachibee.jp/machines/index/217040003
- K-Navi ラッキーベガス: https://p-kn.com/slot/2746/
