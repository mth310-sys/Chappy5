更新日: 2026-09-14

## 現在地点
- recordCount: **1690**
- latestRecordAdded: **スマスロ 聖戦士ダンバイン — No.1690**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-02_smart-slot-seisenshi-dunbine.md`
- chronologicalFrontier: **2024-12-02**
- schema: **resetBehavior v0.7**
- status: **2024-12-02_BOUNDARY_OPEN_4_OF_7_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1689を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1690 `スマスロ 聖戦士ダンバイン` を追加し、性能コア + resetBehavior v0.7を収録。
- Sammy公式、遊技通信、Amusement Japan、HAZUSE、必勝本、なな徹、ちょんぼりすた等を横断し、型式 `Lスマスロ聖戦士ダンバインMF`、検定番号 `430531`、銀座製造/サミー販売、2024-12-02導入、設定別ボーナス/ST初当り、機械割、ベース、純増を照合。
- 設定変更時は有利区間・天井・内部状態等をリセット/再抽選。ゲーム数0～110G、オーラカウンタ0～16ptを内部加算し、周期天井を通常最大8周期から最大5周期へ短縮。3周期以内当選期待度90%以上、初回ボーナス当選まで機械割103%以上を公開朝一数値として収録。
- 据え置きは有利区間、天井、内部状態、内部ゲーム数、オーラカウンタを引継ぎ。純電源OFF→ONは必勝本で天井G、周期数、オーラカウンタ、状態、オーラ高確の引継ぎを直接確認。
- 純電源OFF→ON時の有利区間そのものの機種固有直接記載、本機固有ガックン条件/発生率、設定変更時の内部状態初期振り分け、オーラ高確移行Gランダム加算の詳細振り分けは検索語・資料系統を変えた再探索後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 通常営業中の有利区間リセット時は上位ST突入恩恵があるが、解析資料が設定変更時を除くと明記するため朝一リセット恩恵へ混入していない。

## No.1690 — スマスロ 聖戦士ダンバイン
- path: `docs/real_machine_db/machines/2024-12-02_smart-slot-seisenshi-dunbine.md`
- manufacturer: **銀座製造 / サミー販売**
- formalModel: **Lスマスロ聖戦士ダンバインMF**
- inspectionCode: **430531**
- releaseDate: **2024-12-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.9 / 100.5 / 104.1 / 109.0 / 114.4%**
- bonusInitial: **1/355.8 / 351.6 / 342.7 / 332.9 / 319.7 / 307.7**
- STInitial: **1/597.7 / 588.4 / 572.5 / 552.5 / 528.0 / 505.6**
- base: **約31.5G/50枚**
- netIncrease: **約6.0枚/G**
- basicPayout: **フェラリオ約50枚 / オーラ約100枚 / HYPER約100枚 / ST25G**
- normalCeiling: **763G+α または最大8周期目**
- settingChange: **有利区間・天井・内部状態RESET/再抽選、内部G0～110G加算、オーラカウンタ0～16pt加算**
- resetCeiling: **周期天井最大5周期 / 3周期以内当選期待度90%以上**
- carryOver: **有利区間・天井・内部状態・内部G・オーラカウンタCARRY_OVER**
- powerCycle: **天井G・周期・オーラカウンタ・状態・オーラ高確CARRY_OVER / 有利区間直接記載のみUNVERIFIED**
- resetBenefits: **5周期短縮 + 内部G/pt加算 + 初回ボーナスまで機械割103%以上**
- resetPenalties: **前日進行は消失するが設定変更固有の追加的不利数値NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetection: **朝一表示は設定変更/据え置き双方でリセットされるため表示単独判別不可。5周期超非当選は据え置き推測材料。本機固有ガックンUNVERIFIED**
- publicMorningNumbers: **0～110G / 0～16pt / 最大5周期 / 3周期以内90%以上 / 初回ボーナスまで103%以上**
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_POWER_CYCLE_ADVANTAGEOUS_SECTION_DIRECT_STATEMENT**

## conflicts
- 性能コアの主要数値は業界/主要解析複数で一致し、実質的な競合なし。
- 規定オーラカウンタ天井ポイントに32pt/33ptの表記差があるが、今回の物差し対象は周期数であり完全再現用の細部としてcanonicalへ採用しない。

## 2024-12-02境界 — OPEN 4/7 known
1. L 犬夜叉2 — No.1687 DONE
2. Lルパン三世 大航海者の秘宝 — No.1688 DONE
3. Sウルトラミラクルジャグラー — No.1689 DONE
4. スマスロ 聖戦士ダンバイン — No.1690 DONE
5. 桃太郎電鉄 ～パチスロも定番!～ — NEXT
6. 沖ドキ！ゴージャス 30φ — PENDING / 別スペック監査
7. 沖ドキ！ゴージャス 25φ — PENDING / 別スペック監査
- 7候補処理後、当時新台カレンダー、メーカー別一覧、PB/地域先行/別型式/延期・段階導入を再監査して2024-12-02境界をCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 旧INDEXが疎・進捗非正本であるため、次回以降machines実体を時系列で再列挙し、同カーソル直後の最初のresetBehavior欠損レコードを確定してから遡及更新する。
- resetBehavior欠損のみを理由に既存`COMPLETE_CORE`を降格しない。

## 次回再開地点
- 最新mainを再同期しNo.1690と本handoffを確認。
- **No.1691候補 `桃太郎電鉄 ～パチスロも定番!～`** から再開。
- 続いて同日known候補 `沖ドキ！ゴージャス 30φ` → `沖ドキ！ゴージャス 25φ` を処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## 今回の主要ソース
取得日: 2026-09-14
### スマスロ 聖戦士ダンバイン
- Sammy 公式製品ページ: https://www.sammy.co.jp/japanese/product/pachislot/sp_dan_ba/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/29203/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004571/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/29220/amusement
- HAZUSE 機種情報: https://hazuse.com/hd/430531-2/
- HAZUSE 解析: https://hazuse.com/machine/pachislot/SX0092/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4404/1/106018
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4404/1/106649
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/853/25754/
- なな徹 天井: https://nana-press.com/kaiseki/machine/853/25751/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/853/25752/
- ちょんぼりすた 機種解析: https://chonborista.com/slot/sammy-slot/222581/
- ちょんぼりすた 天井: https://chonborista.com/slot/sammy-slot/227906/
