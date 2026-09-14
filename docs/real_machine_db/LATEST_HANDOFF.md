更新日: 2026-09-15

## 現在地点
- recordCount: **1759**
- latestRecordAdded: **SHAKE BONUS TRIGGER — No.1759**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-10-20_shake-bonus-trigger.md`
- chronologicalFrontier: **2025-10-20**
- schema: **resetBehavior v0.7**
- status: **2025-10-20_BOUNDARY_CLOSED_2_OF_2_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1757 `スマスロ バベル` を追加し、2025-10-06群を3/3 CLOSED。
- No.1758 `L 荒野のコトブキ飛行隊` とNo.1759 `SHAKE BONUS TRIGGER` を追加し、2025-10-20群を2/2 CLOSED。
- 2025-11-04群は信頼できる月間一覧・機種スケジュールで `Lパチスロ 革命機ヴァルヴレイヴ2 / スマスロ とある科学の超電磁砲2 / L 絶対衝激Ⅳ` の3機が一致。過去の一部予定表にあった `Lまじかるすいーとプリズム・ナナ` は後に2025-12-08全国導入へ確定したため11/04群には含めない。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1758 — L 荒野のコトブキ飛行隊
- path: `docs/real_machine_db/machines/2025-10-20_l-kouya-no-kotobuki-hikoutai.md`
- manufacturer: スパイキー（製造） / フィールズ（販売）
- formalModel: L荒野のコトブキ飛行隊SS / inspectionCode: 5S0846
- settings: L / 2 / 3 / 4 / 5 / 6
- payoutRate(setting2-6): 97.4 / 98.8 / 102.5 / 106.2 / 110.8%
- CZ: 1/212.0 → 1/225.1 / AT: 1/414.9 → 1/318.9
- base: 約35G/50枚（設定2） / 純増約7.0枚/G
- reset: 通常最大1500G+α→1400G+α。設定変更時500G 1.6 / 800G 75.0 / 1100G 11.7 / 1400G 11.7%。CZスルー天井0/1/2/4/6スルー=20.3/31.3/37.5/7.8/3.1%、0〜2スルー合算89.1%。

## No.1759 — SHAKE BONUS TRIGGER
- path: `docs/real_machine_db/machines/2025-10-20_shake-bonus-trigger.md`
- manufacturer: **大都技研**
- formalModel: **LB／シェイクボーナストリガー／A1**
- inspectionCode: **530293**
- releaseDate: **2025-10-20**
- settings: **L / 1 / 2 / 5 / 6**
- payoutRate(setting1/2/5/6): **98.6 / 100.6 / 103.0 / 106.1%**
- completeStrategyPayout: **100.4 / 102.4 / 104.9 / 108.1%**
- BIG: **1/350.5 / 1/327.7 / 1/341.3 / 1/297.9**
- REG: **1/425.6 / 1/332.7 / 1/409.6 / 1/297.9**
- 合算: **1/192.2 / 1/165.1 / 1/186.2 / 1/148.9**
- base: **約37G/50枚（設定1）**
- BIG: **300枚以上保証、BT込み平均約400枚（設定1）** / REG平均約80枚
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1759 resetBehavior v0.7
- 天井非搭載。設定変更時の天井短縮は `NOT_APPLICABLE`。
- 朝一専用モード・CZ・規定G数契約は確認されず、リセット狙い上の恩恵は `NONE_CONFIRMED`。
- 後発機種別解析では設定変更と電源OFF→ONで朝一狙い上の差なしと整理されるが、液晶/演出カスタム等の見た目挙動は高優先資料で直接固定できず推測しない。
- 本機固有の有利区間を設定変更/据え置き/純電断ごとに直接明記した高優先資料は再探索後も固定できず `UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率も検索語・型式・メーカーを変えて再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 設定L具体性能は公開値を固定できないため推測していない。

## conflicts / source normalization
- No.1759の通常/完全攻略機械割、BIG/RB/合算、約37G/50枚はG-net、GreenBelt、なな徹、ちょんぼりすた等で一致し重大CONFLICTなし。
- 一部後発記事に導入日2025-10-06との誤記があるが、大都技研告知転載、GreenBelt、G-net、HAZUSE、情報島等は2025-10-20で一致。10/06は `CONFLICT_LIKELY_SECONDARY_DATE_ERROR` として隔離。
- BIG平均は業界公表「約400枚」と後発精密値413.5枚があり、同一定義の丸め/精密差として約400枚を基本性能、413.5枚を補助値に保持。

## 2025-10-20境界 — CLOSED 2/2 canonical
1. L 荒野のコトブキ飛行隊 — No.1758 DONE
2. SHAKE BONUS TRIGGER — No.1759 DONE

boundaryAudit:
- 情報島過去新台一覧、ALL7月間一覧、G-net開店日、各機種固有資料を再照合し2機で一致。
- PB・別型式・地域先行・延期/段階導入を再探索し追加対象を確認できずCLOSED。

## 次の境界 — 2025-11-04 OPEN 0/3 known canonical
1. **Lパチスロ 革命機ヴァルヴレイヴ2 — No.1760 CANDIDATE**
2. **スマスロ とある科学の超電磁砲2 — No.1761 CANDIDATE**
3. **L 絶対衝激Ⅳ — No.1762 CANDIDATE**

boundaryCandidateEvidence:
- パチビー2025年11月導入日一覧、1geki月間新台スケジュール、P-Summaの11月パチスロ新台整理で上記3機の11/04導入が一致。
- P-Summaは11月全体を4機とし、残るスマスロネオプラネットは11/17。
- 一部旧予定カレンダーに11/04予定と出た `Lまじかるすいーとプリズム・ナナ` は、カルミナ発売告知および後発資料で全国導入2025-12-08と確定しているため11/04境界から除外。

## 次回再開地点
- 最新mainを再同期しNo.1759と本handoffを確認。
- **No.1760候補「Lパチスロ 革命機ヴァルヴレイヴ2」— 2025-11-04** から本線を継続する。
- その後 `スマスロ とある科学の超電磁砲2` → `L 絶対衝激Ⅳ` を処理し、2025-11-04境界をPB・別型式・地域先行・延期/段階導入まで再監査する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
