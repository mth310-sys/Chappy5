更新日: 2026-09-10

## 現在地点
- recordCount: **1196**
- latestRecordAdded: **パチスロディスクアップ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-04_disc-up.md`
- chronologicalFrontier: **2018-06-04**
- frontierLatestMachine: **パチスロディスクアップ — No.1196**
- schema: **resetBehavior v0.7**
- status: **2018-06-04_GROUP_OPEN_1_OF_AT_LEAST_5_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1195 / retro QA cursorを再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時正本は **1195件 / chronologicalFrontier 2018-05-28 / 5/28群CLOSED**。
- 2018-06-04群を再監査し、handoff既知の `パチスロディスクアップ` / `パチスロ 天元突破グレンラガン極` / `パチスロ 貞子vs伽椰子` に加え、同日カレンダーから `黄門ちゃまV` / `ちゃぶ台返し` を未処理候補として確認。
- 先頭 `パチスロディスクアップ` をNo.1196としてperformance core + resetBehavior v0.7収集。
- 導入日はHAZUSE / K-Navi / 一撃 / ちょんぼりすた / 当時新台カレンダーが2018-06-04で一致。スロぱちクエストのみ2018-05-21のため、平均せずCONFLICTとして保持し2018-06-04をcanonicalとした。
- 遡及QAは `2006-07_hanasakari.md`（花盛）を処理。既存coreStatus `PARTIAL`は維持し、reset側を `PARTIAL_RESEARCH_EXHAUSTED` とした。
- 花盛は当時業界記事でBIG後50G RT「さくらタイム」と通常時15枚役からのRTを新規確認したため、性能コアも既存欠損を補完。BIG約275枚、CB約100枚（別資料で実獲得96～107枚）も追加。
- Git履歴で花盛追加commit `be42c692...` の直後が `959ef416... Add 2006-07 Dengeki Franken machine record` と確認。次QAカーソルを `2006-07_dengeki-franken.md` に進めた。

## No.1196 — パチスロディスクアップ
- path: `docs/real_machine_db/machines/2018-06-04_disc-up.md`
- manufacturer: **Sammy（サミー）**
- releaseDateCanonical: **2018-06-04**
- formalModelName: `ディスクアップ／ZS`
- certificationNumber: `7S1598`
- generation/system: **5.9号機 / A+ART / 技術介入機**
- settings: **1 / 2 / 5 / 6**
- 通常機械割: **98.9 / 100.3 / 103.3 / 107.2%**
- 完全攻略: **103.0 / 104.3 / 107.2 / 110.0%**
- BIG: **1/288.7 / 1/287.4 / 1/281.3 / 1/273.1**
- REG: **1/496.5 / 1/458.3 / 1/442.8 / 1/422.8**
- 合算: **1/182.6 / 1/176.6 / 1/172.0 / 1/165.9**
- 50枚ベース: **約32G（設定1）**
- ART純増: **約0.5枚/G**
- BIG: **最大251枚** / REG: **最大103枚**
- 通常ゲーム数天井: **非搭載**

### resetBehavior v0.7
- settingChange: HAZUSE機種固有表で**有利区間は非有利区間へ**。リールバックライト点灯。朝一1G目のガックン判別も有効。
- carryOver: 「据え置き」を純電断と独立条件で説明するART/RT残G・有利区間契約は `UNVERIFIED_AFTER_RESEARCH`。
- powerOFF→ON: **有利区間を引き継ぐ**。リールバックライトは消灯。
- gameCounter / ceiling: 通常天井なしのため `NOT_APPLICABLE_NO_CEILING`。
- ART/RT残Gの設定変更/純電断時の詳細個別処理は、一般論から補完せず `ART_RT_SPECIFIC_UNVERIFIED_AFTER_RESEARCH`。
- morning benefit: 短縮天井/朝一専用モード/初当たり優遇の公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: バックライト点灯で設定変更濃厚。ただしメニュー操作または1G以上回すことで対策可能。朝一1G目ガックンは設定変更の可能性が高い。発生率は未確認。

## conflicts
### ディスクアップ導入日
- `CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_06_04`
  - HAZUSE / K-Navi / 一撃 / ちょんぼりすた / パチスロ立ち回り講座: 2018-06-04。
  - スロぱちクエスト: 2018-05-21。
  - canonicalは複数当時/導入後資料一致の2018-06-04。

### メーカー表記
- スロぱちクエストは「銀座」表記だが、HAZUSE / K-Navi / 一撃 / 当時カレンダーはSammy。型式`ディスクアップ／ZS`を基準に本DBではSammyをcanonicalとする。

## 2018-06-04群監査
### 処理済み
- No.1196 パチスロディスクアップ — canonical 2018-06-04（日付CONFLICT保持）

### 未処理候補
- **黄門ちゃまV** — オリンピア
- **パチスロ 天元突破グレンラガン極** — スパイキー
- **パチスロ 貞子vs伽椰子** — 藤商事
- **ちゃぶ台返し** — ベルコ

### 群判定
- `2018-06-04_GROUP_OPEN_1_OF_AT_LEAST_5_PROCESSED`
- 次回は同日候補の正式導入日・別スペック・メーカー横断監査を続け、最古未処理をNo.1197から処理する。
- 現時点の次候補はカレンダー上同日であるため、安定した並びとして **黄門ちゃまVをNo.1197候補** とする。ただし最新mainと同日監査結果を再確認してから確定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_hanasakari.md**（花盛）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_dengeki-franken.md`（電撃フランケン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。

### 花盛 QA結果
- 既存coreStatus `PARTIAL`は維持。
- resetBehaviorQA: `PARTIAL_RESEARCH_EXHAUSTED`。
- 当時グリーンべると/P-WORLD記事で、BIG後50G RT「さくらタイム」、通常時15枚役（1/496.5）からのRTを確認し性能コアへ補完。
- パチマガスロマガでBIG規定345枚超・純増約275枚、CB規定119枚超・純増約100枚を確認。業界記事のCB実獲得96～107枚とは定義を分離して保持。
- 設定変更/据え置き/純電断時のRT残G・ボーナス成立状態は十分な再探索後も機種固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は世代上 `NOT_APPLICABLE`。短縮天井/朝一専用モード/公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率等の競合は平均化せず`CONFLICT`として保持する。
- 6/4群はhandoff旧候補3機種だけで閉じず、今回追加確認した黄門ちゃまV/ちゃぶ台返しも必ず監査対象にする。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1196を再取得。
2. **1196件 / chronologicalFrontier 2018-06-04 / 6/4群OPEN**を正本として継続。
3. **2018-06-04群の残り全メーカー/別スペック監査**を継続。
4. **黄門ちゃまVをNo.1197先頭候補**としてperformance core + resetBehavior v0.7を収集。ただし並行更新と同日順を最新mainで再確認してから確定。
5. 続いて `パチスロ 天元突破グレンラガン極` / `パチスロ 貞子vs伽椰子` / `ちゃぶ台返し` を漏れなく処理する。
6. 遡及QAは `2006-07_dengeki-franken.md`（電撃フランケン）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1196 パチスロディスクアップ
- HAZUSE: https://hazuse.com/machine/pachislot/7S1598/
- K-Navi: https://p-kn.com/slot/3005/
- 一撃: https://1geki.jp/slot/s_discup/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/57863/
- PiDEA X: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- パチスロ立ち回り講座 新台カレンダー: https://crankyseven.com/newmachine-info.htm
- スロぱちクエスト（導入日CONFLICT）: https://www.slopachi-quest.com/article/disc-up-2018/

### 花盛 QA
- P-WORLD業界ニュース / グリーンべると: https://news.p-world.co.jp/articles/1751/greenbelt
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/05/a.php
- パチマガスロマガ 打ち方: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/05/d.php
- 5号機クロニクル: https://5goki.com/snkplaymore
- Home-Slot: https://home-slot.net/SHOP/s-snk10.html

## 今回コミット
- No.1196追加: `f89e5b2e84635b0254a1afd9a9e88d05d8a5bccc`
- 花盛QA更新: `463388a5d7de4971425e81b0b94065bb13dc385a`
