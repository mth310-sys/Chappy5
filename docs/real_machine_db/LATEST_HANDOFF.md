# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **515**
- latestMachineAdded: **パチスロピンポン**（三洋物産 / 2010-09-06 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2010-09-06_pachislot-ping-pong.md`
- chronologicalFrontier: **2010-09-27**
- frontierLatestMachine: **リングにかけろ1 ～黄金の日本Jr.編～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **514** / chronologicalFrontier **2010-09-27**。
- LATEST_HANDOFF指定の2010年9月漏れ監査を継続し、**パチスロピンポン**がrepo未登録であることを確認して515件目として遡及追加。
- コミックナタリーは本機を**2010-09-06より全国ホールで順次稼働予定**、東京地区は10月上旬と報道。一方K-Naviは**2010-10-04**を掲載するが、同カレンダーは「全国一斉導入開始日」で地域差ありと明記。日付定義を分離しCONFLICTにはしない。
- 本機は前線より古いBACKFILLのため `chronologicalFrontier` は **2010-09-27** のまま維持する。

## 515 — パチスロピンポン

- メーカー: **三洋物産**
- 地域順次稼働開始: **2010-09-06**
- 全国一斉導入基準: **2010-10-04**（K-Navi定義）
- 世代/タイプ: **5号機 / ゲーム数管理型ART**
- 機械割: **96.6 / 98.1 / 100.2 / 103.4 / 107.1 / 112.0%**
- ART初当たり: **1/146.5 / 1/135.2 / 1/131.0 / 1/111.4 / 1/103.3 / 1/84.4**
- ボーナス＋ART合算: **1/135.6 / 1/125.9 / 1/122.2 / 1/105.0 / 1/97.7 / 1/79.6**
- 50枚/1000円: **約33.2G**
- BIG: **約240枚**
- ART: **約+1.9枚/G**、ナビ15/25/35/50回+α
- モード最大規定G: **A 989G / B 999G / 天国99G / 超天国32G**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — パチスロピンポン

- 設定変更時は**滞在モード再抽選**を確認。
- 公開設定変更モード振り分け（全設定共通）: **A 80.0% / B 17.0% / 天国 3.0%**。超天国は設定変更振り分け表に掲載なし。
- 設定変更後の公開朝一数値として、3%で天国スタート→**最大99G**を保持。A/B選択時はそれぞれ最大989/999G。
- 旧天井狙い資料は本機を「宵越し×」「設定変更時モードを再セット」とするため、設定変更後に前日のハマリ進捗を天井狙いへそのまま加算できない点を実戦上の不利として保持。ただし内部カウンタ変数の厳密なCLEAR方式は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の内部カウンタ/モード保持は、本機固有の高信頼直接本文を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 単純電源OFF→ON時のモード・規定G・ART状態は検索語と資料系統を変えて再探索しても直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、液晶、ランプ等の変更判別も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## CONFLICT / 注意

- 導入日差は**CONFLICTではなく定義分離**。2010-09-06は全国順次稼働開始予定、2010-10-04はK-Naviの全国一斉導入開始日。K-Navi自身が地域により前後すると注記。
- P-WORLDは通常A/Bをまとめて最大999Gと簡略化。詳細解析はA989G/B999G。全体最大999Gとして両者は整合するためCONFLICT扱いしない。
- 2010-10-04の全国一斉導入群を処理する際、**ピンポンは515で登録済みなので重複追加しない**。

## 主要出典（取得日 2026-09-04）

- コミックナタリー: `https://natalie.mu/comic/news/35630`
- K-Navi機種ページ: `https://p-kn.com/slot/1262/`
- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6062`
- Cranky Seven: `https://crankyseven.com/pinpon-pc.htm`
- 天井ハイエナ生活（宵越し補助資料）: `https://macerate.seesaa.net/article/226312110.html`

## 今回のGitHub更新

- 515 パチスロピンポン追加: `docs/real_machine_db/machines/2010-09-06_pachislot-ping-pong.md`
- LATEST_HANDOFF: このコミット。

## 次回再開地点

1. **recordCount 515 / chronologicalFrontier 2010-09-27**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 9/27同日群・2010年9月の月粒度/地域差機の漏れ監査を閉じる。具体日が9/27以前の未登録機が見つかればBACKFILLし、frontierは後退させない。
3. 9/28～10/3の境界を監査。未登録の具体導入日がなければ2010-10-04全国一斉導入群へ進む。
4. K-Navi 2010-10-04群のパチスロ候補は **ビッグシオV / ロケットパニック / 極お父さん ～舞い降りた天使???～ / 出番だ!葉月ちゃん / パチスロピンポン**。各候補をrepo実ファイルで重複確認し、最古の未登録機を次レコードへ。**ピンポンは515で登録済みのため重複禁止**。
5. 遡及QAは既存正本の **Jackまで補完済み + Thunder既収集済み**を維持。新規時系列前進を止めず、次の実在resetBehavior欠損pathが一意確定できた時のみ補完する。
