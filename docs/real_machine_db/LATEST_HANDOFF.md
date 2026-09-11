更新日: 2026-09-12

## 現在地点
- recordCount: **1398**
- latestRecordAdded: **パチスロ アイドルマスター ミリオンライブ！ — No.1398**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_idolmaster-million-live.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **パチスロ アイドルマスター ミリオンライブ！ — No.1398**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_OPEN_4_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainはNo.1397「パチスロラブ嬢2プラス」まで進行済みだったため、固定キュー次機種の **No.1398「パチスロ アイドルマスター ミリオンライブ！」** を追加。
- 収集途中で2025年スマスロ版「ネクストプロローグ」のリセット値が検索結果に混入したため、2021年機と型式・導入年を再照合して完全除外。
- 2021年機の有利区間移行時モード表は、なな徹HTML抽出の見出し/rowspan崩れをパチマガスロマガ同一表で再照合し、A/B/ブースト/チャンスの列順と設定4ブースト28.3%をcanonical化。
- 遡及resetBehavior QAは `2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）を正式処理。性能側 `coreStatus: PARTIAL` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。

## No.1398 — パチスロ アイドルマスター ミリオンライブ！
- path: `docs/real_machine_db/machines/2021-03-08_idolmaster-million-live.md`
- manufacturer: **ビスティ**
- formalModel: **SアイドルマスターG**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-03-08**
- generation/system: **6.1号機 / AT / CZ / 擬似ボーナス / 純増可変型AT**
- payoutRateBySetting: **97.5 / 96.0 / 99.7 / 102.7 / 105.5 / 108.4%**
- AT初当たり: **1/310.0 / 211.6 / 281.2 / 244.3 / 221.1 / 196.6**
- baseGamesPer50: **約38.8G**
- netIncrease: **AT約0.3枚/G / BOOST約4.3枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_TABLE_AND_CEILING_SCOPE_NOTES**

### resetBehavior v0.7 — No.1398
- 設定変更時は **ログインステージ準備中（非有利区間）から開始**。前有利区間のファン数/CZ進行は継続扱いにしない。
- 純電源OFF→ONは、有利区間中なら **全状態CARRY_OVER**、非有利区間中なら設定変更時同様。
- 設定変更専用短縮天井・朝一AT保証・朝一専用固定当選率は確認できず。
- ファン数9999人で確定CZ。CZスルー天井は「8連続スルー」と「4〜9回シナリオ最終CZ」の資料表現差があるため単一値へ丸めない。
- 後発単一資料の通常時900G天井は `ANALYSIS_SINGLE_LATE_DISCLOSURE` として補助保持し、リセット専用値にはしない。
- 有利区間移行時モード表（設定1→6）:
  - A: 47.1 / 23.0 / 39.7 / 33.0 / 27.9 / 22.1%
  - B: 26.8 / 46.4 / 32.9 / 38.3 / 42.4 / 47.1%
  - ブースト: 25.7 / 30.2 / 27.1 / 28.3 / 29.3 / 30.4%
  - チャンス: 各設定 約0.4%
- 上記モード表は **有利区間移行時共通**であり、設定変更専用表とは断定しない。
- 有利区間ランプは当時攻略資料で点灯=据え置き濃厚 / 消灯=リセット濃厚。ただし閉店時非有利区間や店側対策を考慮し100%確定扱いにしない。
- 本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 2025年スマスロ版の「リセット500G」「75.8%/24.2%」等は **別機種情報として明示的に除外**。

## 2021-03-08群 — OPEN
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — No.1396 / DONE**
3. **パチスロラブ嬢2プラス — No.1397 / DONE**
4. **パチスロ アイドルマスター ミリオンライブ！ — No.1398 / DONE**
5. **ワンチャンス1000 — NEXT / No.1399候補**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通）**

- status: **2021-03-08_GROUP_OPEN_4_OF_6_KNOWN_PROCESSED**。
- 6機処理後、全メーカー・別型式・PB・地域差・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-03-08群の **No.1399候補「ワンチャンス1000」** から継続。
- 性能コア + resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を優先確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）。
- SASHIBAは性能側 `coreStatus: PARTIAL` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。
- 天井RTの存在は確認できるが、設定変更/据え置き/純電断時の天井G・RT状態・成立済みボーナス/告知状態・ガックン等の機種固有契約は、P-WORLD、パチマガスロマガ、当時/回顧DBを再探索後も固定できず一般論で補完しない。
- Git追加履歴でSASHIBA直後の次レコード追加を確認。次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）**。

## GitHub保存
- SASHIBA reset QA commit: `5ed1154c4ef1a41886fbc609e8be61436d076446`
- No.1398 mode-table correction commit: `501b4374dec79d039a47a87ff4db0b3856a9f7c0`
- このhandoff更新後にmain HEADを再取得し、No.1398・SASHIBA・handoffの一致を確認する。

## 主要出典 — 取得日 2026-09-12
### No.1398 パチスロ アイドルマスター ミリオンライブ！
- https://www.sankyo-fever.jp/collection/916/
- https://hisshobon.news/uncategorized/413/
- https://nana-press.com/kaiseki/machine/114/3089/
- https://nana-press.com/kaiseki/machine/114/3220/
- https://nana-press.com/kaiseki/machine/114/3221/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/39/tj07.php
- https://www.slopachi-quest.com/article/mirimasu-tenjou/
- https://www.p-world.co.jp/machine/database/9325
- https://chonborista.com/slot/sankyo-slot/129748/
- https://note.com/oboro_slot/n/n61c915f20bbe

### SASHIBA / サシバE-30
- https://www.p-world.co.jp/machine/database/4742
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/c.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/05/k.php
- https://www.pachinkovista.com/pfactory/model.php?km=2&nid=016365
- https://5goki.com/trivy
- https://slothistory.com/kousin_kako04.html
- https://q-and-a.hatenablog.com/entry/2016/10/06/114509
