更新日: 2026-09-13

## 現在地点
- recordCount: **1546**
- latestRecordAdded: **パチスロ モンスターハンターワールド：アイスボーン™ — No.1546**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-01-30_monster-hunter-world-iceborne.md`
- chronologicalFrontier: **2023-01-30**
- frontierLatestMachine: **パチスロ モンスターハンターワールド：アイスボーン™ — No.1546**
- schema: **resetBehavior v0.7**
- status: **2023-01-30_GROUP_OPEN_1_OF_2_KNOWN / NEXT_S_OOHANAMITSU_PB**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1545 `もっと！チバリヨ-25` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- handoff記載どおり2023-01-11〜01-29境界を既知監査済みとして2023-01-30群へ前進。
- No.1546 `パチスロ モンスターハンターワールド：アイスボーン™` を性能コア + resetBehavior v0.7で追加。
- 初期ティザー型式 `S MHWアイスボーンZD` と最終市場型式 `S MHWアイスボーンZF` の差を再確認。東京都公安委員会検定通過 `ZF / 2S1204` と最終販売発表をcanonicalとし、ZD期の事前数値はCONFLICTへ隔離。
- 2023-01-30群は既知2機のうち1機処理済み。PB初期導入 `S大花満 / S大花満SB` が残るためOPENのまま。

## No.1546 — パチスロ モンスターハンターワールド：アイスボーン™
- manufacturer: **エンターライズ製造 / フィールズ販売**
- formalModel: **S MHWアイスボーンZF**
- inspectionCode: **2S1204**
- releaseDate: **2023-01-30**
- generation/system: **6.5号機 / メダルAT / CZ経由・狩猟BONUS連続型**
- payoutRate: **98.2 / 99.4 / 101.6 / 105.2 / 109.6 / 113.5%（設定1〜6）**
- AT初当たり: **1/371.2 / 1/360.1 / 1/348.4 / 1/318.5 / 1/289.9 / 1/267.8**
- CZ合算: **1/124.9 / 1/119.7 / 1/115.1 / 1/104.7 / 1/101.8 / 1/94.7**
- baseGamesPer50: **約39G/50枚**
- netIncrease: **約2.8枚/G**
- basicPayout: **青7 60G+α / 赤7 40or50G+α / BAR25G+α**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_BEHAVIOR_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1546
- **設定変更**: 有利区間・天井G・クエストモード・内部状態・ぷちBINGOをRESET。RESET後は高確スタート濃厚。
- **据え置き**: 有利区間・天井G・クエストモード・内部状態・ぷちBINGOをCARRY_OVER。
- **純電源OFF→ON**: 天井G・クエストモード・内部状態・有利区間をCARRY_OVER。ぷちBINGOも内部引継ぎとする解析あり。
- **通常天井**: 最大999G+αでBONUS。
- **リセット専用短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。BAR BONUS単発後約33%の128G+α短縮は別契約。
- **朝一恩恵**: 高確スタート濃厚 / 初回クエスト成功時青7BONUS優遇 / 設定変更後1G目のレア小役成立でBONUS直撃・AT突入。
- **公開朝一数値**: 通常時レア役合算1/29.90〜1/27.63（設定1〜6）を1G目直撃条件の構成要素として保存。ただし朝一専用当選率へ再計算しない。
- **変更判別**: 設定変更・据え置きとも前線拠点セリエナ開始。有利区間ランプでも判別不可。本機固有ガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。

## conflicts — No.1546
- **型式**: 初期ティザー `S MHWアイスボーンZD` vs 最終市場 `S MHWアイスボーンZF / 2S1204`。canonicalはZF。
- **事前スペック**: ZD期一部資料は設定5/6出玉率107.5/110.1%、AT 1/304.4/1/289.5、CZ 1/101.1/1/96.4。最終ZF複数資料は109.6/113.5%、AT 1/289.9/1/267.8、CZ 1/101.8/1/94.7。平均せず `CONFLICT_PRERELEASE_SPEC` として隔離。
- **朝一初回クエスト**: 「青7優遇」と「青7濃厚」の表現差あり。具体率を固定できないためcanonicalは保守的に「優遇」。

## 2023-01-30群 — OPEN 1/2 known
1. **パチスロ モンスターハンターワールド：アイスボーン™（エンターライズ）** — No.1546 済
2. **S大花満 / S大花満SB（ジェイピーエス / PB機）** — 未処理。1/30初期納品・4/3一般販売の段階導入差を保持して処理する。

## 直前完了群
- **2023-01-10群 CLOSED 2/2**
  1. SモモキュンソードDX — No.1544
  2. もっと！チバリヨ-25 — No.1545

## 今回の主要資料
### No.1546
- PiDEA 東京都公安委員会検定通過: https://pidea.jp/articles/1666664814
- G-net 大阪府検定切れ一覧: https://g-net-ps.com/content/kenteikire-2025-10-2/
- 遊技日本 / P-WORLD 最終販売発表: https://news.p-world.co.jp/articles/22545/nippon
- Amusement Japan / P-WORLD: https://news.p-world.co.jp/articles/22170/amusement
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/22166/yugitsushin
- 遊技日本 初期ティザーZD: https://news.p-world.co.jp/articles/21805/nippon
- ぱちんこキュレーション事前資料: https://pachinko-curation.com/34060/
- 一撃 機種TOP: https://1geki.jp/slot/s_mhwib/
- 一撃 スペック: https://1geki.jp/slot/s_mhwib/1/
- 一撃 小役/ベース: https://1geki.jp/slot/s_mhwib/4/
- 一撃 天井: https://1geki.jp/slot/s_mhwib/3/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/474/13161/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/176052/
- ぽこすろっと: https://www.nankaikoya.jp/monsterhunter-iceborne-kitaichi/
- パチ＆スロ必勝本 有利区間: https://p.hisshobon.jp/machine/4004/1/93249

### 境界監査（前relayから継承）
- ALL7 2023年1月: https://www.all7.jp/plans/index/2023/01
- K-Navi 2023年1月: https://p-kn.com/calendar/202301/
- グリーンべると / P-WORLD 大花満: https://news.p-world.co.jp/articles/22687/greenbelt
- パチビー モンハン アイスボーン: https://www.pachibee.jp/machines/index/222120000

## 保存コミット
- No.1546追加: `af40322f76643da0d01efe3bf4087563318735ec`
- handoff更新: 本コミット

## 次回再開地点
**No.1547候補 `S大花満 / S大花満SB`（ジェイピーエス / PB機）から継続する。正式型式・検定番号、性能コア、resetBehavior v0.7を収集し、2023-01-30初期納品と2023-04-03一般販売の段階導入差をCONFLICTではなく販売フェーズ差として保持する。処理後、2023-01-30群をPB・別型式・地域先行まで再監査してCLOSED判定する。既存No.1546以前の性能値はやり直さない。**