更新日: 2026-09-10

## 現在地点
- recordCount: **1215**
- latestRecordAdded: **マイジャグラーIV**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-23_my-juggler-iv.md`
- chronologicalFrontier: **2018-07-23**
- frontierLatestMachine: **マイジャグラーIV — No.1215**
- schema: **resetBehavior v0.7**
- status: **2018-07-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1214を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- mainは1214件 / No.1214「SLOTハイスクール・フリート」まで進行済み。handoff最優先候補「マイジャグラーIV」を既存重複確認後No.1215として登録。
- 導入日はHAZUSE/K-Navi/必勝本/ちょんぼりすたが2018-07-23で一致。PiDEA展示会記事も7/23開店予定。型式`マイジャグラーIV／KE`、検定番号`7S1012`をHAZUSEで固定。
- 性能コアは北電子公式のシリーズ数列、HAZUSE、K-Navi、必勝本、PiDEA、なな徹等を横断。PAYOUT 95.7〜109.4%、BIG 1/287.4〜1/240.9、REG 1/431.2〜1/240.9、合算1/172.5〜1/120.5、約35G/50枚、BIG約312枚、REG約104枚、天井非搭載を固定。
- baseは後年DBに約34.9〜37.0G/50枚の設定差レンジがある一方、導入時必勝本は調査中。canonicalは比較用代表値約35G/50枚、精密設定別値は高信頼へ昇格しない。
- resetBehaviorでは、なな徹本機ページで「設定変更時は1G目/ゾロ目G BIGでもBGM変化なし」「朝一BIGでBGM変化なら据え置き確定」を確認し主要変更判別契約として保存。
- ガックンは、ちょんぼりすたの「対策されていなければおそらく可能・幅が小さく参考程度」と、別ジャグラー整理資料の「判別×」が競合。`CONFLICT_GAKKUN_POSSIBLE_REFERENCE_ONLY_VS_EFFECTIVELY_UNUSABLE`として保持し、発生率はUNVERIFIED。
- 純電源OFF→ONのみを据え置きから独立して示すBGM履歴/ゲーム数履歴/成立済みボーナス等の本機固有契約は、検索語・資料系統を変えても固定できず`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 天井・AT/ART/CZ・ゲーム数解除モードは非搭載。リセット専用の短縮天井/初当たり優遇/朝一モード振り分けは非該当または確認なし。

## No.1215 — マイジャグラーIV
- manufacturer: **北電子**
- releaseDateCanonical: **2018-07-23**
- formalModelName: **マイジャグラーIV／KE**
- certificationNumber: **7S1012**
- generation/system: **5号機 / ノーマルA・完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **95.7 / 97.9 / 99.9 / 102.8 / 105.3 / 109.4%**
- BIG: **1/287.4 / 1/282.5 / 1/273.1 / 1/264.3 / 1/252.1 / 1/240.9**
- REG: **1/431.2 / 1/364.1 / 1/341.3 / 1/292.6 / 1/277.7 / 1/240.9**
- bonusCombined: **1/172.5 / 1/159.1 / 1/151.7 / 1/138.9 / 1/132.1 / 1/120.5**
- base: **約35G/50枚（補助レンジ約34.9〜37.0G）**
- BIG payout: **約312枚**
- REG payout: **約104枚**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: 1G目/ゾロ目G BIGでも特殊BGM変化なし。本機固有の低レベル内部フラグ処理はUNVERIFIED。
- carryOver: 朝一最初のBIGでBGM変化が発生すれば設定据え置き確定とする解析あり。
- powerOFF→ON: 据え置きと分離した本機固有契約は`UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: 天井なし。BGM判別に関係する履歴は設定変更でリセット相当だが純電断時はUNVERIFIED。
- mode/state: AT/ART/CZ/ゲーム数解除モードなし。朝一専用出玉モードなし。
- advantageousSection: 本DBで記録対象となる有利区間ゲーム性は確認されず`NOT_APPLICABLE_TO_RECORDED_GAMEPLAY`。一般論で補完しない。
- resetBenefits: リセット専用天井短縮/初当たり優遇/CZ・ART優遇なし。
- resetPenalties: 出玉面の固有ペナルティ確認なし。判別上は設定変更でBGM据え置きサインが消える。
- resetDetection: BGM判別を主要契約として採用。ガックンは資料競合で参考以下、公開率なし。
- numericResetData: リセット専用確率/モード振り分け/ガックン率は公開値未確認。

## 2018-07-23群監査
### 登録済み
- No.1213 ストリートファイターV パチスロエディション — canonical 2018-07-23、7/16 vs 7/23導入日CONFLICT。
- No.1214 SLOTハイスクール・フリート — 2018-07-23。
- No.1215 マイジャグラーIV — 2018-07-23。

### 群判定
- `2018-07-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- すろぱちくえすとの2018年導入日一覧では7/23をハイスクール・フリート/マイジャグラー4、7/30をルパン三世 世界解剖と掲載。
- HAZUSE/K-Navi等でストリートファイターVの7/23型式紐付けを確認済み。別資料の7/16表記は既存CONFLICTとして保持。
- 追加の同日別スペック/PB/地域差候補を直接固定できず、現時点の横断監査でCLOSEDとする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_cranky-condor-x.md**（クランキーコンドルX）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。性能コア判定は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_rumble-roses.md`（ランブルローズ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- next cursor evidence: クランキーコンドルX追加commit `c48cbb8f2e0ed07aeb54e9b94722c182fe222871` の直後の実機追加commit `960c357b2d04159358c182db55d996531bc1bfa7` がランブルローズ。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1215を再取得。
2. **1215件 / chronologicalFrontier 2018-07-23 / 7/23群CLOSED**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. 2018-07-24〜07-29の境界漏れを短く監査後、**2018-07-30「パチスロ ルパン三世 世界解剖」**をNo.1216最優先候補として既存重複確認→性能コア+resetBehavior v0.7収集。
4. 7/30群を全メーカー/別スペック/PB/地域差で横断監査してCLOSE可否を判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_rumble-roses.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1215 マイジャグラーIV
- 北電子: https://www.kitadenshi.co.jp/slot/myjuggler/
- PiDEA: https://pidea.jp/articles/%E3%81%95%E3%82%89%E3%81%AA%E3%82%8B%E9%A9%9A%E3%81%8D%E3%82%92%E7%8B%AC%E5%8D%A0%E3%80%8C%E3%83%9E%E3%82%A4%E3%82%B8%E3%83%A3%E3%82%B0%E2%85%A3%E3%80%8D%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90
- HAZUSE: https://hazuse.com/machine/pachislot/7S1012/
- K-Navi: https://p-kn.com/slot/3022/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3180/1/70070
- なな徹 機種概要: https://nana-press.com/kaiseki/machine/23/
- なな徹 朝イチ/設定変更: https://nana-press.com/kaiseki/machine/23/349/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/59754/
- みんスロ: https://minslo.com/%E3%83%9E%E3%82%A4%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCiv/
- ジャグラーシリーズ整理: https://www.pachislotblog.tokyo/juggler-series-specmatome/
- すろぱちくえすと2018導入一覧: https://www.slopachi-quest.com/article/sindai-2018/
