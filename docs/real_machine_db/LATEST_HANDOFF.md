更新日: 2026-09-11

## 現在地点
- recordCount: **1358**
- latestRecordAdded: **OZ-1 — No.1358**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-05-18_oz1.md`
- chronologicalFrontier: **2020-05-18**
- frontierLatestMachine: **OZ-1 — No.1358**
- schema: **resetBehavior v0.7**
- status: **2020-05-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1357「沖ドキ！2-30」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 2020-05-18群の4機目 **OZ-1（型式SOZ1-01）** をNo.1358として追加。
- OZ-1は解析公開が極端に少ないため、性能値は確認できた公開値のみ採用。単一攻略系の機械割は参考値として保持し、設定別BIG/REG確率は推測補完していない。
- 5/18群を全メーカー・別型式・別スペック・地域/段階導入まで横断監査し **CLOSED** とした。
- 遡及QAは `2007-04-15_yattane-harumi-chan-30.md` をv0.7形式へ正式化。既存 `COMPLETE_CORE` は維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` とした。

## No.1358 — OZ-1
- path: `docs/real_machine_db/machines/2020-05-18_oz1.md`
- manufacturer: **オズ**
- formalModel: **SOZ1-01**
- certificationNumber: **UNVERIFIED**
- releaseDate canonical: **2020-05-18**
- generation/system: **6号機 / リアルボーナス連チャン / リノタイプ相当 / 30Φ / 完全告知**
- payoutRate reference: **97.0 / 98.0 / 99.5 / 102.4 / 105.3 / 108.1%**（単一攻略系の参考値。複数照合未達）
- settingSpecific BIG/REG: **UNVERIFIED_AFTER_RESEARCH**
- base: **約27G/50枚 vs 約33G/50枚 = CONFLICT**
- BIG: **210枚超払い出しで終了**
- REG: **74枚超払い出しで終了**
- 流星タイム: 当時攻略でボーナス成立約1/10、状態転落約1/40〜1/50、ループ約80%以上の参考値あり
- 通常時ゲーム数天井: **NONE_CONFIRMED**
- coreStatus: **PARTIAL**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**

### resetBehavior v0.7 — No.1358
- 設定変更時の内部MB成立状態・ボーナス高確状態・成立済みボーナス状態の初期化契約は、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の上記状態の翌日引継ぎも、純電源OFF→ON時の処理も、独立条件として確定できる公開資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時ゲーム数天井は確認されていないため `gameCounterReset` / `ceilingAfterReset` は通常天井について **NOT_APPLICABLE / NONE_CONFIRMED**。
- 流星タイム表示50Gは演出上の表示であり、朝一の通常天井進捗として扱わない。
- ゲーム数管理の朝一専用モード振り分け、リセット専用短縮天井、朝一特定G以内当選率、リセット恩恵発生率は **NONE_CONFIRMED**。
- 当時解説では出玉ナビを使わないリアルボーナス連チャン機で有利区間非搭載とされるため、朝一有利区間ランプ判別対象として扱わない。
- 本機固有のガックン、初期出目、ランプ等による変更確定条件は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / QA notes — No.1358
- releaseDate: K-Naviは **2020-05-18**、当時記事には「5月先行」「7/6全国デビュー」「8/24全国」等の段階導入表現あり。`RELEASE_SCHEDULE_CONFLICT_OR_STAGED_ROLLOUT` として保持し、同型式を7月/8月に別レコード化しない。
- baseGamesPer50: 約27Gと約33Gで資料差。定義/実測条件差を解消できないため `CONFLICT_27G_VS_33G`。
- payoutRate: 97.0〜108.1%は単一攻略系が「参考値」として掲載。別系統照合未達のため `ANALYSIS_SINGLE_REFERENCE_ONLY`。
- 設定別BIG/REG確率は当時資料でも「調査中」で、後年資料でも高信頼表を固定できずUNVERIFIEDのまま。

## 2020-05-18群監査
1. ハイドラ-30 — **No.1355 / 処理済み**
2. ビッグシオ-30 — **No.1356 / 処理済み**
3. 沖ドキ！2-30 — **No.1357 / 処理済み**
4. OZ-1 / SOZ1-01 — **No.1358 / 処理済み**
- K-Navi 2020年5月導入カレンダーの5/18パチスロ4機と一致。
- OZ-1の7/6・8/24表記は段階導入/全国展開資料としてNo.1358へ統合し、後続で重複登録しない。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 性能側 `COMPLETE_CORE` は維持。
- resetBehaviorVersion: **v0.7**。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- MRT/内部RT残りGの設定変更・据え置き・純電断時処理、本機固有ガックン等は、メーカー/業界/当時解析/旧DB/回顧資料を再横断しても固定できず推測補完していない。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。Git追加履歴で、やったネ！はるみちゃん-30の後続追加レコードとして確認。

## 次回本線の再開地点
- 最新main再同期後、**2020-07-06群**へ進む。
- 既知候補:
  1. **ワンバーS1-30 — No.1359候補**
  2. **パチスロ 言い訳はさせないわよ！by壇蜜**
- **OZ-1 / SOZ1-01**にも7/6全国展開資料があるが、No.1358と同一型式の段階導入として処理済み。重複レコード化しない。
- 2020年6月は確認した導入カレンダー上、パチスロ新台の明確な本線候補なし。次回は7/6群を複数系統で再監査してから最初の未処理機種を登録する。

## GitHub保存
- No.1358追加 commit: `46ea839534650a33f69d3c71db52c8993cc42d87`
- やったネ！はるみちゃん-30 reset QA commit: `dbc3c354008cbf3d91f380f8680607d2195521a7`

## 主要出典 — 取得日 2026-09-11
### No.1358 OZ-1
- グリーンべると「新規メーカー『オズ』のパチスロ機が検定通過」: https://web-greenbelt.jp/post-37215/
- K-Navi 2020年5月導入カレンダー: https://p-kn.com/calendar/202005/
- P-WORLD「OZ-1」: https://www.p-world.co.jp/machine/database/9209
- スロパチクエスト「OZ1(オズワン) 設定差まとめ」: https://www.slopachi-quest.com/article/oz1-settei/
- P-Summa「謎の爆裂6号機『OZ-1』」: https://psumma.jp/pachislo/49072/ / https://psumma.jp/pachislo/49284/
- パチスロのある日常「OZ1 3択の押し位置考察」: https://mokkun7.com/enjoy/oz1-3taku/
- ぱちんこキュレーション「スロットOZ1-オズワン-」: https://pachinko-curation.com/15898/
- クオぱち「OZ-1」: https://www.pachinkoquora.com/machine/pachinslot/1497/

### 次回導入群監査
- 2020導入カレンダー: https://www.pachinkopachisro.com/newmachine/calendar2020.html
- グリーンべると「パチスロ 言い訳はさせないわよ！by壇蜜」: https://web-greenbelt.jp/post-38935/
