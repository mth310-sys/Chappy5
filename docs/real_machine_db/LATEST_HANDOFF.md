更新日: 2026-09-15

## 現在地点
- recordCount: **1760**
- latestRecordAdded: **Lパチスロ 革命機ヴァルヴレイヴ2 — No.1760**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-11-04_l-pachislot-kakumeiki-valvrave2.md`
- chronologicalFrontier: **2025-11-04**
- schema: **resetBehavior v0.7**
- status: **2025-11-04_BOUNDARY_OPEN_1_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1759を再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1760 `Lパチスロ 革命機ヴァルヴレイヴ2` を追加。
- 2025-11-04群は既知canonical 3機のうち1機完了。残りは `スマスロ とある科学の超電磁砲2` → `L 絶対衝激Ⅳ`。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1760 — Lパチスロ 革命機ヴァルヴレイヴ2
- path: `docs/real_machine_db/machines/2025-11-04_l-pachislot-kakumeiki-valvrave2.md`
- manufacturer: **SANKYO（三共） / 製造: ジェイビー**
- formalModel: **L革命機ヴァルヴレイヴ2jF**
- inspectionCode: **5S0736**
- releaseDate: **2025-11-04**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate(setting1/2/4/5/6): **97.7 / 99.3 / 104.7 / 110.8 / 114.9%**
- CZ: **全設定1/324**
- firstHitCombined: **1/476 / 1/473 / 1/464 / 1/459 / 1/456**
- base: **約32.7G/50枚**
- AT/上位AT純増: **約9.0枚/G**
- 革命BONUS: **45G+α / 平均約460枚 / AT期待度約53%**
- 革命RUSH: **1セット10G〜100G以上 / 継続期待度約75%**
- 超革命RUSH: **最大継続率約90%**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1760 resetBehavior v0.7
- 設定変更時はBONUS/RUSH間救済が **1500G→1000G**へ短縮。SANKYO公式開発資料で直接確認。
- 周期天井は通常最大6周期→**最大3周期**へ短縮。
- 設定変更後モード振り分け: **通常A約69% / 通常B約25% / 通常C約5% / 天国約1%**。通常B以上合算約31%。
- 設定変更後1周期目は **100ptまたは200ptで周期到達濃厚**。SANKYO公式は、朝一1周期目のみ定点ptからズレて前兆開始する場合があると明記。
- 据え置き/純電源OFF→ONでは天井・内部状態・モード/ポイント進行を引き継ぐ機種別解析を確認。
- 有利区間は設定変更時RESET、据え置き時CARRY_OVERを機種別解析で確認。純電断時の有利区間を公式が直接列挙した記述は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 200pt以内に前兆/煽りがなければ据え置き濃厚とする解析あり。ただし「定点ptからズレた前兆=据え置き」ではないと公式が注意喚起。
- 本機固有ガックン条件/発生率は型式・メーカー・シリーズ名を含め再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の具体的な内部状態振り分け数値も `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- 初当り、機械割、CZ、ベース、純増は1geki・なな徹・ちょんぼりすた等で一致し重大CONFLICTなし。
- 1gekiの一部ページでは設定変更時ゲーム数天井が「調査中」と残るが、SANKYO公式開発資料が2025-12-03に設定変更後1000Gを明記。値の競合ではなく情報更新差と判断し、公式1000Gをcanonical採用。
- 有利区間の通常時切断条件には一部解析で実戦予想が含まれるため、設定変更時RESET以外の予想条件は確定値へ昇格していない。

## sources summary
retrievedAt: 2026-09-15
- SANKYO公式オンライン博物館: 導入月、純増、機種概要。
- SANKYOプレスリリース: 2025-11-04全国導入開始。
- SANKYO開発こぼれ話「救済機能」: 通常1500G/CZ999G、設定変更後1000G、1500G到達恩恵1:1:1。
- SANKYO開発こぼれ話「設定変更後の挙動」: 朝一1周期目の前兆開始ptズレ。
- SANKYO開発こぼれ話「通常時のモード」: A/B/C/天国のモード構造。
- 1geki / なな徹 / ちょんぼりすた: 設定別性能、周期、AT、朝一比較。
- なな徹: 設定変更後モード69/25/5/1%、有利区間、200pt判別。
- ジャグラーズネット / 6確: 電源OFF→ON・据え置きの引継ぎ補助照合。

## 2025-11-04境界 — OPEN 1/3 known canonical
1. **Lパチスロ 革命機ヴァルヴレイヴ2 — No.1760 DONE**
2. **スマスロ とある科学の超電磁砲2 — No.1761 CANDIDATE**
3. **L 絶対衝激Ⅳ — No.1762 CANDIDATE**

boundaryCandidateEvidence:
- 直前handoffでパチビー2025年11月導入日一覧、1geki月間新台スケジュール、P-Summaの11月整理を照合し上記3機の11/04導入が一致済み。
- 一部旧予定カレンダーの `Lまじかるすいーとプリズム・ナナ` は後に2025-12-08全国導入へ確定したため11/04境界から除外済み。

## 次回再開地点
- 最新mainを再同期しNo.1760と本handoffを確認。
- **No.1761候補「スマスロ とある科学の超電磁砲2」— 2025-11-04** から本線を継続する。
- その後 `L 絶対衝激Ⅳ` を処理し、2025-11-04境界をPB・別型式・地域先行・延期/段階導入まで再監査する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
