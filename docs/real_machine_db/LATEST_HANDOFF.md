# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **709**
- latestMachineAdded: **十字架2**（ネット / NET CORPORATION）
- latestRecord: `docs/real_machine_db/machines/2013-01-21_jujika-2.md`
- chronologicalFrontier: **2013-01-21**
- frontierLatestExactDateMachine: **十字架2**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-01-21_GROUP__AUDITED_2013-01-22_TO_01-27__NEXT_2013-01-28_ZEUS**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2013-01-21_darker-than-black.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` と実レコードを直近進捗の正本として優先。
- 開始時main正本は recordCount **708** / chronologicalFrontier **2013-01-21** / 01-21群OPEN。
- **709件目: 十字架2（ネット）** を登録済み。並行更新で同機種の重複ファイルが一時生成されたため、正本を `2013-01-21_jujika-2.md` に統合し重複を削除。recordCountは709のまま維持。
- パチマガスロマガ `c-1.php` で **1000円あたり33.40G** を追加確認し、従来UNVERIFIEDだったbaseGamesPer50を確定。
- 当時2013-01-26記事で1/21新台はDARKER THAN BLACK / 十字架2の2機種と確認され、両機登録済みのため **2013-01-21群CLOSED**。
- 2013-01-22〜01-27を具体日+新台/導入/発売で再監査し、今回それ以前の追加未登録機を具体日付きで確認できなかった。
- メーカー発表で次の具体日付きアンカー **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」** を確認。

## 今回追加/更新 — 十字架2

### 性能コア

- releaseDate: **2013-01-21**。
- 型式名: **十字架2SD** / 検定番号 **2S1164**。
- systemType: **5号機 / AT / BR非搭載 / 規定ゲーム数解除+小役解除 / 上乗せ+継続テーブル**。
- 機械割: **97.0 / 98.5 / 100.0 / 103.5 / 105.5 / 110.0%**。
- AT初当たり: **1/249 / 1/242 / 1/240 / 1/235 / 1/215 / 1/199**。
- 50枚ベース: **33.40G/50枚**。パチマガスロマガ解析値。別同サイト実戦値「約33G」と整合。
- AT主系列: **1セット30G+継続バトル+上乗せ / 純増約+2.9枚/G**。

### 天井 / CONFLICT

- 通常モード: NORMAL A / NORMAL B / SUPERリオナ / SUPERティナ。
- P-WORLD・pacnk等主系列: **A 992G / B 944G / リオナ128G / ティナ32G**。
- HAZUSE現行整理のみNORMAL A **1280G**。B/リオナ/ティナは一致。
- NORMAL Aは `CONFLICT_NORMAL_A_992_VS_1280` として平均せず保持。
- AT基本性能も主系列 **30G+α相当 / 約+2.9枚/G** に対し5号機クロニクル **50G+α / 約+2.8枚/G** があるためCONFLICT保持。

### resetBehavior v0.7

- 設定変更時: **天井ゲーム数CLEAR_CONFIRMED**。
- 設定変更後: **NORMAL A非選択 / NORMAL B以上スタート CONFIRMED**。
- 設定変更後最大天井: **944G**。候補はB 944G / リオナ128G / ティナ32G。
- NORMAL A設定変更時選択: **なし（0%相当）**。
- B/リオナ/ティナ具体振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 純据え置き時のゲーム数・モード・液晶完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時のゲーム数・モード・液晶契約: **UNVERIFIED_AFTER_RESEARCH**。
- resetBenefit: NORMAL A除外により最大944Gへ短縮。リオナ128G/ティナ32Gの浅い天井候補あり。
- resetPenalty: 前日規定G進捗は設定変更で消失。
- resetDetection: pacnkは **945G以上ハマリ=通常A確定**と整理。設定変更後A非選択のため、朝一ペナルティ等なしで945G以上ハマリは据え置き/非変更の強い事後材料。
- ガックン/初期出目/電源投入液晶だけの直接判別: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

## 2013-01-21同日群 / 次境界

- DARKER THAN BLACK -黒の契約者-: 登録済み（708件目）。
- 十字架2: 登録済み（709件目）。
- 2013-01-21群: **CLOSED**。
- 2013-01-22〜01-27: 今回具体日監査済み。追加未登録を確認できず。
- 次回最優先: **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」（エレコ / ユニバーサル）**。
- ユニバーサルエンターテインメント2013-01-22発表で **2013-01-28より全国ホール導入開始予定**を直接確認。
- 型式候補: `ミリオンゴッド-神々の系譜-ゼウスUV` / 検定番号 `2S1080`。次回公式・HAZUSE・P-WORLD等で再照合してから登録。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 空手バカ一代には既にresetBehaviorが存在するため重複補完せず、その次の実レコードから欠損検査を継続する。

## 次回再開地点

1. **recordCount 709 / chronologicalFrontier 2013-01-21 / 01-21群CLOSED / 01-22〜01-27監査済み** から開始。
2. **2013-01-28「ミリオンゴッド-神々の系譜-ZEUS ver.」** をrepo重複確認。
3. 未登録ならメーカー公式・HAZUSE・P-WORLD・当時解析を横断し、性能コア+resetBehavior v0.7を収集して710件目として登録。
4. 01/28同日群をメーカー別一覧・HAZUSE/K-Navi/P-WORLD/旧DBで監査し、同日未処理があれば続ける。
5. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-06

### 十字架2
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1164/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6940`
- K-Navi: `https://p-kn.com/slot/1771/`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/155/net_slot_155.php`
- パチマガスロマガ小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/155/c-1.php`
- pacnk: `https://pacnk.com/slot/tools/sh_jujika2.html`
- 2013年当時設定変更記事: `https://ameblo.jp/happyslotatushi/entry-11456220776.html`
- パチスロ業界初まとめ: `https://slothistory.com/kousin_all_0.html`
- 5号機クロニクル: `https://5goki.com/net`
- 1/21新台2機種確認: `https://macerate.seesaa.net/article/316297790.html`

### 次候補 / 境界
- ユニバーサル発表（2013-01-22 / ZEUS 1/28導入）: `https://www.atpress.ne.jp/news/32832`
- 4Gamer転載: `https://www.4gamer.net/games/200/G020087/20130122017/`
- HAZUSE ZEUS候補: `https://data.hazuse.com/?genre=201&machine_code=2S1080`
