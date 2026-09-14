更新日: 2026-09-15

## 現在地点
- recordCount: **1772**
- latestRecordAdded: **スマスロ 北斗の拳 転生の章2 — No.1772**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-01-05_hokuto-no-ken-tensei-no-sho-2.md`
- chronologicalFrontier: **2026-01-05**
- schema: **resetBehavior v0.7**
- status: **2026-01-05_GROUP_OPEN_1_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1771を再同期。
- INDEXは旧スナップショットのためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1772 `スマスロ 北斗の拳 転生の章2` を追加。
- 2026-01-05群は既監査4機候補のうち1機処理済み。群は **OPEN 1/4**。
- 性能コアとresetBehavior v0.7を分離して保存。設定変更/据え置き/純電断、天井、モード、内部状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を収集した。

## No.1772 — スマスロ 北斗の拳 転生の章2
- path: `docs/real_machine_db/machines/2026-01-05_hokuto-no-ken-tensei-no-sho-2.md`
- manufacturer: **銀座 / サミー**
- formalModel: **L スマスロ北斗の拳 転生の章2 MW**
- inspectionCode: **5S1206**
- releaseDate: **2026-01-05**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.4 / 100.7 / 106.2 / 111.1 / 114.9%**
- ATInitial: **1/366.0 / 1/357.0 / 1/336.3 / 1/298.7 / 1/283.2 / 1/273.1**
- base: **約31.5G/50枚**
- netIncrease: **約4.0枚/G**
- normalCeiling: **最大1536あべし**
- resetCeiling: **最大1280あべし**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1772 resetBehavior v0.7
- 設定変更時は天井あべし、内部状態、有利区間、内部モードをRESET。表示あべしは0だが内部ランダム加算あり。
- 純電源OFF→ONでは天井、内部状態、有利区間、内部モードを引き継ぎ、表示あべしのみ0に戻る機種固有直接比較を確認。
- 据え置きはなな徹で有利区間CARRY_OVERを直接確認。天井等は1280あべし超過時の据え置き濃厚判別と純電断直接比較を支持材料とし、独立三者比較不足分は信頼度を一段落として保持。
- 通常最大1536あべしに対して設定変更後は最大1280あべしへ短縮。
- 設定変更時内部状態は全設定共通 **低確25.0% / 通常25.0% / 高確50.0%**。
- 設定1の設定変更時モードは **A49.3% / B22.0% / C20.1% / 天国8.6%**。
- 設定変更時256あべし以内規定選択率は **設定1 36.4 / 2 37.1 / 3 41.0 / 4 47.7 / 5 51.4 / 6 52.6%**。
- 伝承ショートへ **6.3%**で移行する解析を確認。
- 有利区間リセットタイミングは設定変更時/スペシャルエンディング後。SE後の上位CZ「天撃」恩恵は **設定変更時を除く**ため朝一へ混入しない。
- 有利区間ランプでは設定変更/据え置き判別不可。朝一表示だけでも判別困難。
- **1280あべし到達で天井非発動なら据え置き濃厚**。
- 本機固有ガックン条件/発生率は資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

## conflicts / source normalization
- AT初当り、機械割、ベース、純増はなな徹・HAZUSE・必勝本・1gekiで一致し重大CONFLICTなし。
- 型式の空白/全角差は同一型式として正規化。
- 通常営業の有利区間リセット時「天撃」恩恵を設定変更朝一へ適用する解釈は不採用。資料が設定変更時を明示的に除外。
- 据え置き全内部項目の独立三者比較表は不足しているため、純電断直接表とは信頼度を分離。

## sources summary
retrievedAt: 2026-09-15
### No.1772
- HAZUSE: https://hazuse.com/machine/pachislot/5S1206/
- なな徹 基本性能: https://nana-press.com/kaiseki/machine/1059/33041/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1059/33026/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/1059/33027/
- 1geki 機種総合: https://1geki.jp/slot/l_hokuto_tensei2/
- 1geki 天井/朝一/電源OFF ON: https://1geki.jp/slot/l_hokuto_tensei2/3/
- 1geki モード: https://1geki.jp/slot/l_hokuto_tensei2/45/
- 1geki 内部状態: https://1geki.jp/slot/l_hokuto_tensei2/43/
- 1geki 設定差: https://1geki.jp/slot/l_hokuto_tensei2/0/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4636/1/113078
- パチビー: https://www.pachibee.jp/machines/kouryaku/225110007
- ジャグラーズネット（補助）: https://jugglersnet.com/chumoku/hokuto-tensei2

## 2026-01-05境界 — OPEN 1/4
1. **スマスロ 北斗の拳 転生の章2 — No.1772 DONE**
2. **スマスロ鉄拳6 — No.1773 candidate**
3. **スマート沖スロ ニューキングハナハナV — candidate**
4. **スマート沖スロ ニューキングハナハナV-30 — candidate**

boundaryAudit:
- 前回handoffで情報島+、ALL7、1gekiの同日一覧からパチスロ4機候補を確認済み。
- 群完了時に25Φ/30Φ派生の独立レコード要否、PB、別型式、地域先行、延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1772と本handoffを確認。
- **No.1773候補「スマスロ鉄拳6」— 2026-01-05** から継続。
- その後 `スマート沖スロ ニューキングハナハナV → スマート沖スロ ニューキングハナハナV-30` を候補キューとして処理。
- 同日群4/4後に境界再監査を行う。
- PARTIAL/UNVERIFIEDは型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回もGitHub実体順でカーソル直後の既存実レコードを安全に一意固定できなかったため、外部導入順から推測更新していない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_NO_UNSAFE_GUESS_UPDATE**
