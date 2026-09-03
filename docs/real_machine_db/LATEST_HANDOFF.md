# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **482**
- latestMachineAdded: **南国育ちスペシャル**（オリンピア / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_nangoku-sodachi-special.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **南国育ちスペシャル**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線481「押忍！操」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **481** / chronologicalFrontier **2010-05-24**。
- 2010-05-25〜06-06境界を再監査し、今回新たな全国具体日未登録パチスロを高信頼に確定できず。
- 2010-06-07同日群へ進み、25φ「南国育ちスペシャル」をrepo未登録確認後482件目として追加。
- 30φ「南国育ちスペシャル-30」は別型式 `南国育ちスペシャルYH-30` / 検定番号 `0S0130` のため別レコード候補として分離。25φとの自動同一扱いはしない。

## 482 — 南国育ちスペシャル 要約

- メーカー: **オリンピア**
- 導入主値: **2010-06-07**（K-Navi）。当時グリーンべるとは **2010-06-06納品開始予定**で、納品/導入の定義差として保持。
- 型式名: **南国育ちスペシャルZ**（複数中古実機系二次資料で一致。公式型式一覧未回収）
- 世代/タイプ: **5号機 / ボーナス＋ART / モード管理 / 2段階天井 / 無限ART**
- PAYOUT: **96.2 / 99.2 / 102.4 / 106.4 / 111.3 / 116.3%**
- BIG: **1/397 / 1/392 / 1/390 / 1/386 / 1/383 / 1/381**
- REG: **1/655 / 1/636 / 1/618 / 1/590 / 1/565 / 1/537**
- 合算: **1/247 / 1/243 / 1/239 / 1/233 / 1/228 / 1/223**
- 50枚ベース: **30.5G**
- BIG: **約204枚** / REG: **約48枚**
- ART「南国チャンス」: **50G / 約+1.5枚/G / 継続率83%超**
- 無限南国チャンス: **次回ボーナスまで継続**
- 通常内部モード: **通常 / 高確率 / 天国 / スペシャル南国**
- スペシャル南国モード: ボーナス時ART突入 **75%** / ART終了後同モード再移行 **75%**
- 第1天井: **ボーナス間996G → AT状態**
- 第2天井: **通常時1600G → 次回ボーナスまで無限ART**
- coreStatus: **COMPLETE_CORE_RESET_PARTIAL**

## resetBehavior v0.7 — 南国育ちスペシャル

- **設定変更**: パチ＆スロ必勝本の本機専用解析で、**高確モードスタート**を直接確認。
- **ゲーム数/天井**: **996G/1600Gの両天井カウンタは設定変更でもリセットされない**と同解析に明記。
- **据え置き**: 天井カウンタに関しては少なくとも設定変更でも保持されるため進捗消失なし。モード/状態の据え置き専用挙動は直接未確認。
- **電源OFF→ON**: ゲーム数、モード、高確、ART関連状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- **リセット短縮**: `NONE_CONFIRMED`。通常天井996G/1600Gを短縮せずカウンタ引継ぎ。
- **モード**: 設定変更時 **高確モードスタート**。具体的振り分け率は未確認。
- **状態**: ARTストック/前兆/RT状態等の個別clear/retainは `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵**: **設定変更時高確モードスタート**。天井進捗も消えない。
- **朝一不利**: 明確な公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、パトランプ等による本機固有判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 高確スタートの具体振り分け率/朝一当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **SETTING_CHANGE_HIGH_MODE_AND_BOTH_CEILING_COUNTERS_CONFIRMED_POWER_CYCLE_STATE_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### 南国育ちスペシャル
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3927/greenbelt`
- K-Navi: `https://p-kn.com/slot/1196/`
- K-Navi ボーナス出現率: `https://p-kn.com/slot/1196/18947/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5927`
- パチ＆スロ必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1578/1/23986`
- crankyseven: `https://crankyseven.com/nangokusodachisp-pc.htm`

## 次回再開地点

1. **recordCount 482 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。まず別型式の **「南国育ちスペシャル-30」**をrepo重複確認後に処理候補とする。HAZUSEでは `南国育ちスペシャルYH-30 / 0S0130`、導入開始日2010-06-04表記がある一方、K-Navi/パチビー/当時グリーンべると系では6/7導入・6/6納品予定系があるため、日付は次回 `CONFLICT`/定義差を精査してから登録する。
3. その後の同日未処理強候補: **ゴッドハンターV / とんでも戦士ムテキング / ガメラ / メタルスラッグSV-001 / ニューパルサーV2 / サンサンオアシス キュイーンVer. / コウヘイ最凶伝 -地獄の閻魔覚醒の刻- / マジックライアン**。パチビー2010-06スケジュールで6/7群を確認。
4. 25φ「南国育ちスペシャル」のapprovalNumber、単純電源OFF→ON、据え置き時モード/内部状態、ガックン等変更判別は追加探索可能。ただし新規収集を止めない。
5. 競合/定義差は平均化せず保持。2026年スマスロ「L南国育ち SPECIAL」のリセット情報は2010年機へ絶対に転記しない。
